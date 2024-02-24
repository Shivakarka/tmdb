const Contributers = () => {
  return (
    <>
      <div>
        <div className="flex gap-2">
          <div className="avatar">
            <a href="">
              <img
                loading="lazy"
                className="h-10 w-10 rounded-full"
                src="https://media.themoviedb.org/t/p/w45_and_h45_face/uUWMSVA84DyGCaF7oXBOfyFzXoy.jpg"
                alt="tyler"
              />
            </a>
          </div>
          <div className="info">
            <p className="edit_count">
              <strong>62</strong>
              <br />
              <a href="">tyler</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <div className="avatar">
            <a href="">
              <img
                loading="lazy"
                className="h-10 w-10 rounded-full"
                src="https://media.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
                alt="raze464"
              />
            </a>
          </div>
          <div className="info">
            <p className="edit_count">
              <strong>368</strong>
              <br />
              <a href="">raze464</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <div className="avatar">
            <a href="">
              <img
                loading="lazy"
                className="h-10 w-10 rounded-full"
                src="https://secure.gravatar.com/avatar/7b76a3ae4647a86de1cf8675f22c0dda.jpg?s=45"
                alt="StevenCarrier"
              />
            </a>
          </div>
          <div className="info">
            <p className="edit_count">
              <strong>68</strong>
              <br />
              <a href="">StevenCarrier</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <div className="avatar">
            <a href="">
              <img
                loading="lazy"
                className="h-10 w-10 rounded-full"
                src="https://secure.gravatar.com/avatar/a4ce4464842d22406ecad1288bb6e1ba.jpg?s=45"
                alt="Seanliu"
              />
            </a>
          </div>
          <div className="info">
            <p className="edit_count">
              <strong>32</strong>
              <br />
              <a href="">Seanliu</a>
            </p>
          </div>
        </div>
      </div>
      <p className="cursor-pointer">View Edit History</p>
    </>
  );
};

export default Contributers;
