"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import CreatePostModal from "../Post_Model/page.jsx";

const POST_TYPES = { PHOTO: 0, REEL: 1, STORY: 2, SCHEDULE: 3 };

const TIMES = ["08:41 PM", "09:41 PM", "10:51 PM"];

const BufferStyleScheduler = () => {
  const [pages, setPages] = useState([]);
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [postType, setPostType] = useState(POST_TYPES.PHOTO);

  // ✅ RANGE STATES
  const [fromPage, setFromPage] = useState("");
  const [toPage, setToPage] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);

  const [scheduleSlots, setScheduleSlots] = useState([]);
  const [lastDate, setLastDate] = useState(new Date());

  const scheduleRef = useRef(null);

  // ✅ Fetch pages
  useEffect(() => {
    axios
      .get("https://sat-tara-backend.vercel.app/api/pages/facebook")
      .then((res) => setPages(res.data.pages || []));
  }, []);

  // ✅ Media validation
  useEffect(() => {
    if (!media) return;

    if (postType === POST_TYPES.PHOTO && !media.type.startsWith("image")) {
      alert("Post Photo = IMAGE required");
      setMedia(null);
    }

    if (
      (postType === POST_TYPES.REEL || postType === POST_TYPES.STORY) &&
      !media.type.startsWith("video")
    ) {
      alert("Reel / Story = VIDEO required");
      setMedia(null);
    }
  }, [media, postType]);

  // ================= SCHEDULER =================
  const generateNextDays = (days = 3) => {
    const newSlots = [];
    let date = new Date(lastDate);

    for (let i = 0; i < days; i++) {
      date.setDate(date.getDate() + 1);

      TIMES.forEach((time) => {
        newSlots.push({
          id: `${date.toDateString()}-${time}`,
          date: date.toDateString(),
          time,
        });
      });
    }

    setLastDate(new Date(date));
    setScheduleSlots((prev) => [...prev, ...newSlots]);
  };

  useEffect(() => {
    if (postType !== POST_TYPES.SCHEDULE) return;

    setScheduleSlots([]);
    setLastDate(new Date());
    generateNextDays(4);
  }, [postType]);

  const handleScheduleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      generateNextDays(2);
    }
  };

  // ================= POST HANDLER (RANGE) =================
  const handlePost = async () => {
    if (!fromPage || !toPage) {
      return alert("Enter Page Range");
    }

    try {
      const fd = new FormData();
      fd.append("content", content);
      fd.append("fromPage", fromPage);
      fd.append("toPage", toPage);

      if (media) fd.append("media", media);
      

      // ✅ SAME API (RANGE BASED)
      await axios.post(
        "https://sat-tara-backend.vercel.app/api/pages/directFacebook/post-photo",
        fd
      );

      alert("Posting started 🚀");
    } catch (err) {
      console.error(err);
      alert("Posting failed ❌");
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "72vh",
        width: "99%",
        mt: 1,
        boxShadow: "2px 2px 2px 2px gray",
      }}
    >
      <Grid item xs={12} md={9} sx={{ p: 3 }} width ={"100%"}>
        <Typography variant="h5" fontWeight={700}>
          Schedule a Post
        </Typography>

        <Tabs
          value={postType}
          onChange={(e, v) => setPostType(v)}
          sx={{ mb: 2 }}
        >
          <Tab label="Post Photo" />
          <Tab label="Post Reel" />
          <Tab label="Post Story" />
          <Tab label="Create Schedule" />
        </Tabs>

        {/* ================= SCHEDULER ================= */}
        {postType === POST_TYPES.SCHEDULE && (
          <Box
            ref={scheduleRef}
            onScroll={handleScheduleScroll}
            sx={{ height: "70vh", overflowY: "auto" }}
          >
            {scheduleSlots.map((slot) => (
              <Box key={slot.id} sx={{ mb: 2 }}>
                <Typography fontWeight={600}>{slot.date}</Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    setActiveSlot(slot);
                    setOpenModal(true);
                  }}
                >
                  + New ({slot.time})
                </Button>

                {openModal && (
                  <CreatePostModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    slot={activeSlot}
                    pages={pages}
                  />
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* ================= POST CREATOR ================= */}
        {postType !== POST_TYPES.SCHEDULE && (
          <>
            <TextField
              label="Write your post"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 3 }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />

            {/* ✅ RANGE INPUT */}
            <Box display="flex" gap={2} mt={3}>
              <TextField
                label="From Page No"
                type="number"
                fullWidth
                value={fromPage}
                onChange={(e) => setFromPage(e.target.value)}
              />

              <TextField
                label="To Page No"
                type="number"
                fullWidth
                value={toPage}
                onChange={(e) => setToPage(e.target.value)}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handlePost}
            >
              Post Now
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default BufferStyleScheduler;