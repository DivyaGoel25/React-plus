import styles from "./Subscription.module.css";

const subscriptionStyles = {
  couponStyles: {
    color: "#000",
    backgroundColor: "yellow",
    padding: "20px",
    border: "dashed 5px red",
  },
  btnStlye: {
    border: "solid 2px red",
    color: "#fff",
    padding: "10px 20px",
    backgroundColor: "red",
  }
};
const Subscription = () => {
  return (
    <div className="text-center">
      <h4 className={styles.subscriptionInfo}>
        You are an active subscriber of Netflix Pro
      </h4>
      <p
        style={{
          color: "#fff",
          backgroundColor: "red",
          borderRadius: "10px",
          padding: "20px 10px",
        }}
      >
        Your subscription will end in 15 days!
      </p>
      <p style={subscriptionStyles.couponStyles}>
        Renew Now at 50% offer. Apply Coupon: OFFER50
      </p>
      <button style={subscriptionStyles.btnStlye}>Renew Now</button>
    </div>
  );
};

export default Subscription;
