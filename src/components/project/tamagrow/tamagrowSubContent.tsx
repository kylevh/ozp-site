export default function TamagrowSubContent() {
  return (
    <>
      <div className="w-full flex flex-col items-start md:items-center">
        <h3 className="text-md font-normal text-left text-white font-ozpPrimary pb-5">
          .CONCEPT_TRAILER
        </h3>
        <div className="flex justify-center items-center pt-0 mt-0 w-full md:w-3/4">
          <div
            className="relative w-full"
            style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/oP6yokR1LOE?si=AwCG5EV9jNw9IToq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
