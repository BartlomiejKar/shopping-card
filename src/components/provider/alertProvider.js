
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

export const alertProvider = (name) => {
    store.addNotification({
        title: "Add product",
        message: `${name}`,
        type: "info",
        insert: "bottom",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__slideInUp"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: false,
        }
    });
}
