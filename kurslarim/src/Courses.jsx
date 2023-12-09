import Course from "./Course";

function Courses({ courses, deleteBtn }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Courses</h2>
      </div>
      <div className="">
        {courses.map((course) => {
          return (
            <Course key={course.id} {...course} handleDelete={deleteBtn} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
