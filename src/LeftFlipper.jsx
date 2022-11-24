const LeftFlipper = ({ object, object2 }) => {
  return (
    <>
      <primitive
        object={object}
        attached={"geometry"}
        position={[-1.57, -0.88, 0.157]}
      />
      <primitive
        object={object2}
        attached={"geometry"}
        position={[-1.57, -0.88, 0.157]}
      />
    </>
  );
};

export default LeftFlipper;
