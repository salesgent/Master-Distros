import Image from "next/image";
import Router from "next/router";
import React, { useEffect } from "react";
import styles from "./popups.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Dialog } from "@mui/material";

const OfferPopup = ({ show }) => {
  // const [open, setOpen] = React.useState(show);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (show) {
      // setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": {
            width: "auto",
            height: "auto",
            overflow: "hidden",
            maxWidth: "none",
            img: {
              // height: "100%",
              // width: "100%",
            },
          },
        }}
      >
        <Box
          sx={{
            img: {
              borderRadius: "4px",
            },
          }}
        >
          <img
            // layout="fill"
            // objectFit="cover"
            src={"/images/header/offer.png"}
            alt="offer"
            // placeholder="blur"
            style={{ maxHeight: 650, maxWidth: "100%" }}
          />
        </Box>
      </Dialog>
      {/* <div className={styles.container}>
        <div className={styles.modal} style={{ position: "relative" }}>
          <div style={{ maxWidth: 300 }}>
            <Image
              src="/images/header/offer.png"
              alt="img"
              width={300}
              height={300}
              layout="intrinsic"
              className={styles.img}
            />
          </div>
          <div>
            <AiOutlineClose
              style={{ fontSize: "1.8rem", cursor: "pointer", position: "absolute", right: 10, top: 10 }}
              onClick={() => {
                // sessionStorage.setItem("DontShowPopups", "true");
                setShow(false);
              }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OfferPopup;
