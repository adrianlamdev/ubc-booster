// "use client";

// import React from "react";
// import { useState } from "react";
// import {
//   Modal,
//   Input,
//   Row,
//   Checkbox,
//   Button,
//   Text,
//   Link,
// } from "@nextui-org/react";

// export default function DisclaimerModal({ isOpen, onClose }) {
//   const closeHandler = () => {
//     onClose();
//     console.log("closed");
//   };
//   return (
//     <div>
//       <Modal
//         closeButton
//         blur
//         aria-labelledby="modal-title"
//         open={isOpen}
//         onClose={closeHandler}
//       >
//         <Modal.Header>
//           <Text id="modal-title" size={18}>
//             Welcome to <span> </span>
//             <Text b size={18}>
//               UBC Booster
//             </Text>
//             !
//           </Text>
//         </Modal.Header>
//         <Modal.Body>
//           <Text>
//             This website is not affiliated with the{" "}
//             <Link isExternal href="https://www.ubc.ca/">
//               UBC
//             </Link>{" "}
//             nor{" "}
//             <Link isExternal href="https://ubcgrades.com/">
//               UBC Grades
//             </Link>
//             .
//           </Text>
//           <Text>
//             This website was made for UBC Vancouver students only, and will remain relevant to UBC Vancouver students only.
//           </Text>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button auto onPress={closeHandler}>
//             I understand
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
