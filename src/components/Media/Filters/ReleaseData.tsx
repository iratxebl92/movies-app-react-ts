export const ReleaseData = () => {
  return (
    <>
      <p>Release Date</p>
      <div>
        <label htmlFor="releaseDateFrom">From</label>
        <input type="date" id="releaseDateFrom" />
      </div>
      <div>
        <label htmlFor="releaseDateTo">To</label>
        <input type="date" id="releaseDateTo" />
      </div>
    </>
  );
};
