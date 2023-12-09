import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Courses from "./courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(" http://localhost:3000/courses");
      setCourses(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {courses.length === 0 ? (
            <div>
              <div>You deleted all of course</div>
              <div onClick={fetchCourses}>
                <button>Refresh</button>
              </div>
            </div>
          ) : (
            <Courses courses={courses} deleteBtn={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
