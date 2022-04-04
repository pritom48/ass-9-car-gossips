import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='py-5'>1. what is context API ??</h1>
            <h5>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                Context API is a (kind of) new feature added in version 16.3 of Reactthat allows one to share state across the entire app (or part of it)lightly and with ease.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</h5>


            <h1 className='py-5'>2. What Is Semantic Tag?</h1>
            <h5>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as b and i are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</h5>
        </div>
    );
};

export default Blogs;