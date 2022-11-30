export const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};
export const flexCenterColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};

export const btnHoverStyle = {
  cursor: "pointer",
  "&:hover": { color: "red" },
};

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: ".5rem",
};
