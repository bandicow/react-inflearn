import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./MovieModal.css";

// 프락시 가져오기 저번꺼에 <MovieModal {...movieSelected}  있어서 내용 다 있음
// handleClick 해서 usestate에 넣고 그거를 Open 이 true일때 내용이 들어가진다.
function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;

//  {
//   const ref = useRef();

//   useOnClickOutside(ref, () => {
//       setModalOpen(false);
//   });

//   return (
//     <div className="presentation">
//       <div className="wrapper-modal">
//         <div className="modal" ref={ref}>
//           <span onClick={() => setModalOpen(false)} className="modal-close">
//             X
//           </span>

//   );
// }

// export default MovieModal;
