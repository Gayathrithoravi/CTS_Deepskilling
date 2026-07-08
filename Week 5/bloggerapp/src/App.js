import './App.css';

import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {

    return (

        <div className="container">

            <div className="column">
                <CourseDetails />
            </div>

            <div className="column">
                <BookDetails />
            </div>

            <div className="column">
                <BlogDetails />
            </div>

        </div>

    );

}

export default App;