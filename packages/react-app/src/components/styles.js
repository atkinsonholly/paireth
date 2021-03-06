const backgroundImage = '/background.jpg';

export const styles = {
    headerSection: {
        backgroundColor: "#4752ff",
        height: "70px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#ffffff",
        width: "100%",
        borderRadius: 0
    },
    logoSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "300px",
        "@media (max-width: 1024px)": {
            width: "200px",
        },
    },
    pairContent: {
        alignItems: "center",
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 70px)",
    },
    image: {
        height: "68px",
        pointerEvents: "none",
        marginTop: "5px",
        marginBottom: "5px",
        marginLeft: "20px",
        marginRight: "20px",
        display: "flex",
        alignItems: "center",
    },
    heroImage: {
        height: "250px",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
    },
    subtitle: {
        fontSize: "24px",
        fontWeight: "700",
    },
    about: {
        fontSize: "16px",
        marginTop: "20px",
        marginBottom: "20px",
    },
    pairAddress: {
        fontSize: "24px",
        fontWeight: "700",
        marginTop: "20px",
        marginBottom: "20px",
        display: "Flex",
        flexDirection: "column",
        color: "#423c86",
        height: "90px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // should not be required
    },
    label: {
        fontSize: "16px",
        fontWeight: "700",
        marginLeft: "20px",
        marginRight: "5px",
    },
    createPairMessage: {
        fontSize: "16px",
        fontWeight: "700",
        marginLeft: "20px",
        marginRight: "5px",
        marginBottom: "20px",
        color: "#423c86",
    },
    tokens: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "20px",
        "@media (max-width: 1024px)": {
            flexDirection: "column",
        },
    },
    token: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "@media (max-width: 1024px)": {
            marginTop: "5px",
            marginBottom: "5px",
            justifyContent: "flex-end",
        },
    },
    link: {
        color: "#ffffff",
        fontSize: "16px",
        textDecoration: "none",
        marginRight: "20px",
        underline: "none",
        "@media (max-width: 1024px)": {
            fontSize: "12px",
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4752ff",
        padding: "20px",
        marginRight: "5px",
        marginLeft: "5px",
        "@media (max-width: 1024px)": {
            marginRight: "5px",
            marginLeft: "5px",
        },
    },
    button: {
        backgroundColor: "#4752ff",
        border: "2px solid #ffffff",
        borderRadius: "8px",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "16px",
        textAlign: "center",
        textDecoration: "none",
        margin: "0px 20px",
        padding: "12px 24px",
        minWidth: "180px",
        fontWeight: "700",
        "&:focus": {
            outline: "none",
        },
        "&:hover": {
            backgroundColor: "#423c86",
        },
        "@media (max-width: 1024px)": {
            minWidth: "90px",
            fontSize: "10px",
        },
    },
    disabledButton: {
        backgroundColor: "#9d9caf",
        border: "2px solid #ffffff",
        borderRadius: "8px",
        color: "#ffffff",
        pointerEvents: "none",
        fontSize: "16px",
        textAlign: "center",
        textDecoration: "none",
        margin: "0px 20px",
        padding: "12px 24px",
        minWidth: "180px",
        fontWeight: "700",
        "@media (max-width: 1024px)": {
            minWidth: "90px",
            fontSize: "10px",
        },
    },
    navButton: {
        backgroundColor: "#4752ff",
        border: "2px solid #ffffff",
        borderRadius: "8px",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "16px",
        textAlign: "center",
        textDecoration: "none",
        margin: "0px 20px",
        padding: "12px 24px",
        minWidth: "180px",
        fontWeight: "700",
        "&:focus": {
            outline: "none",
        },
        "&:hover": {
            backgroundColor: "#423c86",
        },
        "@media (max-width: 1024px)": {
            minWidth: "115px",
            fontSize: "10px",
            margin: "2px 5px",
            padding: "6px 12px"
        },
    },
    tokenInput: {
        boxSizing: "border-box",
        minWidth: "400px",
        height: "30px",
        borderRadius: "6px",
        border: "none",
        outline: "none",
        fontSize: "16px",
        padding: "10px",
        overflow: "scroll",
        resize: "none",
        "@media (max-width: 1024px)": {
            minWidth: "180px",
            fontSize: "10px",
        },
    },
    error: {
        fontSize: "12px",
        textAlign: "center",
        color: "#ff0000",
    },
    buttonGroup: {

    },
    trash: {
        marginTop: "11px",
        position: "absolute",
        cursor: "pointer",
        "&:hover": {
            color: "#423c86",
        },
        "@media (max-width: 1024px)": {
            marginTop: "8px",
        },
    },
    disabledTrash: {
        marginTop: "11px",
        position: "absolute",
        pointerEvents: "none",
        "@media (max-width: 1024px)": {
            marginTop: "8px",
        },
    },
    tableTitle: {
        textAlign: "center",
        fontSize: "16px",
        "@media (max-width: 1024px)": {
            fontSize: "12px",
        },
    },
    table: {
        fontSize: "12px",
        backgroundColor: "#4752ff",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        "@media (max-width: 1024px)": {
            padding: "12px",
        },
        "@media (max-width: 768px)": {
            fontSize: "8px",
            padding: "10px",
        },
    },
    hide: {
        "@media (max-width: 1300px)": {
            display: "none",
        },
    }
}