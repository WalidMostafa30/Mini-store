import { Container } from "react-bootstrap";
import "./Search.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSearch } from "../../store/showModalsSlice";
import { cleanSearch, getSearch } from "../../store/searchSlice";

const Search = () => {
  const { search } = useSelector((state) => state.modals);
  const { searchData, msg } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const [selectedOption, setSelectedOption] = useState("categories");

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setInput(value);
    dispatch(getSearch({ selectedOption, title: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setSelectedOption(name);
    setInput("");
    dispatch(cleanSearch());
  };

  const handleChooseProduct = () => {
    dispatch(cleanSearch());
    dispatch(toggleSearch());
    setInput("");
  };

  const handleCloseSearch = () => {
    dispatch(toggleSearch());
    dispatch(cleanSearch());
    setInput("");
  };

  return (
    <div className={search ? "Search active" : "Search"}>
      <button className="Search__close-btn" onClick={handleCloseSearch}>
        X
      </button>

      <div className="Search__checkBox">
        <h5>Choose what you want to search for?</h5>

        <div className="d-flex align-items-center gap-3 justify-content-center">
          <label
            className={
              selectedOption === "categories" ? "main-btn checked" : "main-btn"
            }
          >
            <input
              type="checkbox"
              name="categories"
              onChange={handleCheckboxChange}
            />
            Categories
          </label>
          <b>OR</b>
          <label
            className={
              selectedOption === "products" ? "main-btn checked" : "main-btn"
            }
          >
            <input
              type="checkbox"
              name="products"
              onChange={handleCheckboxChange}
            />
            Product
          </label>
        </div>
      </div>

      <Container className="Search__container">
        <input
          type="text"
          placeholder="Search.."
          className="Search__input"
          value={input}
          onChange={onChangeSearch}
        />

        <div className="Search__result">
          {msg ? (
            <h1 className="text-center mt-5">{msg}</h1>
          ) : (
            searchData.map((pro) => {
              return (
                <Link
                  key={pro.id}
                  to={
                    selectedOption === "categories"
                      ? `/categories/products/${pro.prefix}`
                      : `/categories/products/${pro.catPrefix}/${pro.id}`
                  }
                  className="Search__item"
                  onClick={handleChooseProduct}
                >
                  <img
                    className="Search__item__img"
                    src={
                      selectedOption === "categories"
                        ? pro.img
                        : pro.images && pro.images[0]
                    }
                    alt="img"
                  />
                  <h3 className="Search__item__title">{pro.title}</h3>
                </Link>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

export default Search;
