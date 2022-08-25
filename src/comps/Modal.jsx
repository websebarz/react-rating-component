function Modal({
  submitEl,
  rated,
  rateOneStar,
  rateTwoStar,
  rateThreeStar,
  rateFourStar,
  rateFiveStar,
}) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-5/6 sm:w-[380px] h-auto bg-gray-800 rounded-2xl sm:rounded-3xl">
        <div className="p-8">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
            <i>
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                  fill="#FC7614"
                />
              </svg>
            </i>
          </div>
          <h1 className="font-Overpass text-white text-2xl mt-6">
            How did we do?
          </h1>
          <p className="font-Overpass text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum
            itaque minus perferendis labore?
          </p>
          <div className="font-Overpass flex justify-between mt-4">
            <div
              onClick={rateOneStar}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-200 bg-gray-700 hover:bg-gray-500 active:bg-orange-500 rounded-full cursor-pointer"
            >
              <span>1</span>
            </div>
            <div
              onClick={rateTwoStar}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-200 bg-gray-700 hover:bg-gray-500 active:bg-orange-500 rounded-full cursor-pointer"
            >
              <span>2</span>
            </div>
            <div
              onClick={rateThreeStar}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-200 bg-gray-700 hover:bg-gray-500 active:bg-orange-500 rounded-full cursor-pointer"
            >
              <span>3</span>
            </div>
            <div
              onClick={rateFourStar}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-200 bg-gray-700 hover:bg-gray-500 active:bg-orange-500 rounded-full cursor-pointer"
            >
              <span>4</span>
            </div>
            <div
              onClick={rateFiveStar}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-200 bg-gray-700 hover:bg-gray-500 active:bg-orange-500 rounded-full cursor-pointer"
            >
              <span>5</span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={submitEl}
              className="font-Overpass w-[100%] tracking-wider h-fit bg-orange-500 hover:bg-white rounded-full p-2 text-white hover:text-orange-500"
              disabled={!rated ? true : false}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="text-[11px] text-center text-white mt-2">
        Challenge by &nbsp;{" "}
        <a
          href="https://www.frontendmentor.io"
          target="_blank"
          className="text-[#3e52a3]"
        >
          Frontend Mentor
        </a>{" "}
        .&nbsp; Coded by &nbsp;{" "}
        <a
          href="https://github.com/websebarz"
          target="_blank"
          className="text-[#3e52a3]"
        >
          Seb Arz
        </a>{" "}
        .
      </div>
    </div>
  );
}

export default Modal;
