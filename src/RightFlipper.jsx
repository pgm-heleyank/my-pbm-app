const RightFlipper = ({ object, object2 }) => {
  return (
    <>
      <primitive
        object={object}
        attached={"geometry"}
        position={[-1.57, -0.88, -0.05]}
      />
      <primitive
        object={object2}
        attached={"geometry"}
        position={[-1.57, -0.88, -0.05]}
      />
    </>
  );
};

export default RightFlipper;
