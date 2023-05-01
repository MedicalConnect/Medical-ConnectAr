import React, { useRef, useLayoutEffect, useCallback } from "react";
import DailyIframe from "@daily-co/daily-js";

export const Videocall = ({ isCallActive, roomUrl }) => {
  const callRef = useRef();
  const startCall = useCallback(async () => {
    const callFrame = await DailyIframe.createFrame(
      document.getElementById("videocall-wrapper"),
      { url: roomUrl }
    );
    callRef.current = callFrame;
    callFrame.join();
  }, [roomUrl]);

  useLayoutEffect(() => {
    if (isCallActive && roomUrl) {
      startCall();
    }
    return () => {
      if (callRef.current) {
        callRef.current.leave();
        callRef.current.destroy();
      }
    };
  }, [isCallActive, roomUrl, startCall]);

  if (!isCallActive) return null;

  return <div id="videocall-wrapper" style={{ height: "100%" }} />;
};
