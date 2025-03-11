import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

/**
 * A reusable camera controller that follows mouse movement
 * @param {Object} props - Component props
 * @param {number} [props.azimuthalFactor=0.5] - Factor to control horizontal sensitivity
 * @param {number} [props.polarFactor=0.1] - Factor to control vertical sensitivity
 * @param {number} [props.polarAngleOffset=Math.PI/2] - Default polar angle offset
 * @param {boolean} [props.enableZoom=false] - Whether zooming is enabled
 * @param {boolean} [props.enableRotate=true] - Whether rotation is enabled
 *  @param {number} [props.autoRotateSpeed=1.0] - Speed of auto-rotation
 * @param {Object} [props.orbitControlsProps={}] - Additional props to pass to OrbitControls
 * @returns {JSX.Element} The OrbitControls component
 */

// const CameraController = ({
//   azimuthalFactor = 0.5,
//   polarFactor = 0.1,
//   polarAngleOffset = Math.PI / 2,
//   enableZoom = false,
//   enableRotate = true,
//   autoRotateSpeed=1.0,
//   orbitControlsProps = {},
// }) => {
//   const orbitRef = useRef();
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { innerWidth, innerHeight } = window;
//       mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
//       mouse.current.y = (event.clientY / innerHeight) * 2 - 1;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useFrame(() => {
//     if (orbitRef.current) {
//       orbitRef.current.target.set(
//         mouse.current.x * azimuthalFactor,
//         polarAngleOffset + mouse.current.y * polarFactor,
//         0
//       );
//     }
//   });

//   return (
//     <OrbitControls
//       ref={orbitRef}
//       enableZoom={enableZoom}
//       enableRotate={enableRotate}
//       {...orbitControlsProps}
//     />
//   );
// };

// export default CameraController;


const CameraController = ({
  azimuthalFactor = 0.9,
  polarFactor = 0.8,
  polarAngleOffset = Math.PI / 2,
  enableZoom = false,
  enableRotate = true,
  autoRotate = false,
  autoRotateSpeed = 1.0,
  orbitControlsProps = {},
}) => {
  const orbitRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (orbitRef.current) {
      // Set target position based on mouse movement
      orbitRef.current.target.set(
        mouse.current.x * azimuthalFactor,
        polarAngleOffset + mouse.current.y * polarFactor,
        0
      );

      // Ensure auto-rotation is applied
      orbitRef.current.autoRotate = autoRotate;
      orbitRef.current.autoRotateSpeed = autoRotateSpeed;

      // Update the controls
      orbitRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={orbitRef}
      enableZoom={enableZoom}
      enableRotate={enableRotate}
      autoRotate={autoRotate} // Ensuring this is passed
      autoRotateSpeed={autoRotateSpeed} // Ensuring this is passed
      {...orbitControlsProps}
    />
  );
};

export default CameraController;