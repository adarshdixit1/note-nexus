import LoginBackgroundImage from "../../assests/bookNexus.jpg"

export const styles = {
    backgroundImageContainer: {
        backgroundImage: `url(${LoginBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        minHeight: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        m:0,
        p:0
      },
}