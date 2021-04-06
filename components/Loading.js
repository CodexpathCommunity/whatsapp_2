import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          style={{ marginBottom: 10 }}
          height={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrswwd2CGXgo9vUwbpcaMni5z0L1UH4Fl8sA&usqp=CAU"
          alt=""
        />
        <Circle color=" #4c7785;" size={60} />
      </div>
    </center>
  );
}

export default Loading;
