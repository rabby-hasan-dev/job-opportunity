
import bannerLogo1 from '../../assets/All Images/Vector.png'
import bannerLogo2 from '../../assets/All Images/Vector-1.png'
const Blog = () => {
    return (
        <div>
            <div className='banner w-full flex justify-between'>
                <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 lg:mx-[200px] my-[100px]'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">1. When should you use context API?</h2>
                        <p>I can also use Context API to store a user's authentication status and pass it down to all the components that need it. This way, I can easily restrict access to certain parts of my application based on the user's authentication status. <br></br>
                            Also can use context api in other cases. Such as
                            <ul className='list-disc ml-4'>
                                <li>Theming</li>
                                <li>Multilingual Support</li>
                                <li>Accessing data from external sources</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">2. What is a custom hook?</h2>
                        <p>React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">3. What is useRef?</h2>
                        <p>
                            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called
                        </p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">4. What is useMemo?</h2>
                        <p>The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;