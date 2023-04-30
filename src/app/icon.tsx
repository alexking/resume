import { ImageResponse } from "next/server";

export const runtime = "edge";

// Declare size and content type
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/**
 * Generate the icon
 */
export default function Icon() {
  // Build an image using JSX
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "black",
          borderRadius: "5px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "transparent",
            backgroundClip: "text",
            backgroundImage:
              "linear-gradient(45deg, white, rgb(255, 180, 180))",
          }}
        >
          AK
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
