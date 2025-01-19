// import React, { useState } from "react";
// import { Modal, Form, Input, Button, message } from "antd";
// import EmailVerificationPopup from "../../../components/EmailVerificationPopup"; // Update this path as necessary
// import passwordService from "../../../services/password.service"; // Ensure this path matches your project structure

// const ChangePassword: React.FC = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isEmailVerificationVisible, setEmailVerificationVisible] = useState(false);
//   const userEmail = "user@example.com"; // Replace with dynamic user email from authentication context or props

//   const handlePasswordChange = async (values: any) => {
//     try {
//       // Call the password service method
//       await passwordService.changePassword({
//         oldPassword: values.oldPassword,
//         newPassword: values.newPassword,
//       });
//       message.success("Password changed successfully!");
//       setModalVisible(false); // Close modal
//       setEmailVerificationVisible(true); // Show email verification popup
//     } catch (error: any) {
//       message.error(error.response?.data?.message || "Password change failed.");
//     }
//   };

//   const handleResend = async () => {
//     try {
//       await passwordService.resendVerificationEmail(userEmail);
//       message.success("Verification email resent. Please check your inbox.");
//     } catch (error: any) {
//       message.error("Failed to resend the verification email.");
//     }
//   };

//   const handleCheckCode = async (): Promise<boolean> => {
//     const inputs = document.querySelectorAll('input[type="text"]');
//     const verificationCode = Array.from(inputs)
//       .map((input) => (input as HTMLInputElement).value)
//       .join("")
//       .slice(-6);

//     try {
//       await passwordService.verifyEmail(verificationCode);
//       message.success("Email verified successfully!");
//       setEmailVerificationVisible(false); // Close verification popup
//       return true;
//     } catch (error: any) {
//       message.error("Invalid or expired verification code.");
//       return false;
//     }
//   };

//   return (
//     <>
//       <Button type="primary" onClick={() => setModalVisible(true)}>
//         Change Password
//       </Button>
//       <Modal
//         title="Change Password"
//         visible={isModalVisible}
//         footer={null} // Remove default footer with OK/Cancel buttons
//         onCancel={() => setModalVisible(false)} // Close modal on cancel
//       >
//         <Form
//           onFinish={handlePasswordChange}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center", // Center the form contents
//           }}
//         >
//           <Form.Item
//             label="Old Password"
//             name="oldPassword"
//             rules={[
//               { required: true, message: "Please enter your old password!" },
//             ]}
//           >
//             <Input.Password placeholder="Enter old password" />
//           </Form.Item>
//           <Form.Item
//             label="New Password"
//             name="newPassword"
//             rules={[
//               { required: true, message: "Please enter your new password!" },
//               {
//                 min: 6,
//                 message: "Password must be at least 6 characters long!",
//               },
//             ]}
//           >
//             <Input.Password placeholder="Enter new password" />
//           </Form.Item>
//           <Form.Item
//             label="Confirm Password"
//             name="confirmPassword"
//             dependencies={["newPassword"]}
//             rules={[
//               { required: true, message: "Please confirm your new password!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("newPassword") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match!"));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password placeholder="Confirm new password" />
//           </Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             style={{
//               marginTop: "1rem",
//               alignSelf: "center", // Center the button explicitly
//             }}
//           >
//             Save Password
//           </Button>
//         </Form>
//       </Modal>

//       {isEmailVerificationVisible && (
//         <EmailVerificationPopup
//           visible={isEmailVerificationVisible}
//           onClose={() => setEmailVerificationVisible(false)}
//           onResend={handleResend}
//           onCheck={handleCheckCode}
//           title="Verify Your Password Change"
//           description="Please enter the verification code sent to your email to confirm the password change."
//           successMessage="Your password has been successfully updated!"
//           timerDuration={60}
//         />
//       )}
//     </>
//   );
// };

// export default ChangePassword;
