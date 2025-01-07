// import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
// import HomePage from '../pages/HomePage';
// import Playground from '../pages/playground/Playground';
// import JavaMCQs from '../pages/java-mcqs/JavaMCQs';

// // Java Basics Pages
// import Introduction from '../pages/java-basics/Introduction';
// import JavaSyntax from '../pages/java-basics/JavaSyntax';
// import TypeCasting from '../pages/java-basics/TypeCasting';
// import Comments from '../pages/java-basics/Comments';

// // Flow Control Pages
// import EnhancedFor from '../pages/flow-control/EnhancedFor';

// // Methods Pages
// import PassByValue from '../pages/methods/PassByValue';

// // Arrays Pages
// import ArrayDeclaration from '../pages/arrays/ArrayDeclaration';
// import ArrayAccess from '../pages/arrays/ArrayAccess';
// import ArrayMethods from '../pages/arrays/ArrayMethods';
// import ArraySorting from '../pages/arrays/ArraySorting';
// import ArraySearching from '../pages/arrays/ArraySearching';
// import ArrayCopy from '../pages/arrays/ArrayCopy';

// // Strings Pages
// import StringCreation from '../pages/strings/StringCreation';
// import StringPool from '../pages/strings/StringPool';
// import StringFormatting from '../pages/strings/StringFormatting';
// import RegularExpression from '../pages/strings/RegularExpression';

// // OOP Pages
// import AccessModifiers from '../pages/oop/AccessModifiers';
// import AbstractClasses from '../pages/oop/AbstractClasses';
// import StaticMembers from '../pages/oop/StaticMembers';
// import FinalKeyword from '../pages/oop/FinalKeyword';
// import Package from '../pages/oop/Package';
// import ObjectClass from '../pages/oop/ObjectClass';

// // Exception Handling Pages
// import ExceptionIntro from '../pages/exceptions/Introduction';
// import TryCatch from '../pages/exceptions/TryCatch';
// import MultipleCatch from '../pages/exceptions/MultipleCatch';
// import ThrowThrows from '../pages/exceptions/ThrowThrows';
// import FinallyBlock from '../pages/exceptions/FinallyBlock';
// import CustomExceptions from '../pages/exceptions/CustomExceptions';
// import ExceptionTypes from '../pages/exceptions/ExceptionTypes';

// // Collections Pages
// import SetInterface from '../pages/collections/SetInterface';
// import TreeMap from '../pages/collections/TreeMap';
// import Comparator from '../pages/collections/Comparator';

// // File Handling Pages
// import FileHandlingIntro from '../pages/files/Introduction';
// import FileClass from '../pages/files/FileClass';
// import FileReader from '../pages/files/FileReader';
// import FileWriter from '../pages/files/FileWriter';
// import BufferedReader from '../pages/files/BufferedReader';
// import BufferedWriter from '../pages/files/BufferedWriter';
// import FileStreams from '../pages/files/FileStreams';

// import HandsOnPage from '../pages/hands-on/HandsOnPage';
// import BasicsPrintHello from '../pages/hands-on/basics/BasicsPrintHello';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: '/playground', element: <Playground /> },
//       { path: '/java-mcqs', element: <JavaMCQs /> },

//       // Java Basics Routes
//       { path: '/java-basics/introduction', element: <Introduction /> },
//       { path: '/java-basics/java-syntax', element: <JavaSyntax /> },
//       { path: '/java-basics/type-casting', element: <TypeCasting /> },
//       { path: '/java-basics/comments', element: <Comments /> },

//       // Flow Control Routes
//       { path: '/java-flow-control/enhanced-for', element: <EnhancedFor /> },

//       // Methods Routes
//       { path: '/java-methods/pass-by-value', element: <PassByValue /> },

//       // Arrays Routes
//       { path: '/java-arrays/declaration', element: <ArrayDeclaration /> },
//       { path: '/java-arrays/access', element: <ArrayAccess /> },
//       { path: '/java-arrays/methods', element: <ArrayMethods /> },
//       { path: '/java-arrays/sorting', element: <ArraySorting /> },
//       { path: '/java-arrays/searching', element: <ArraySearching /> },
//       { path: '/java-arrays/copy', element: <ArrayCopy /> },

//       // Strings Routes
//       { path: '/java-strings/creation', element: <StringCreation /> },
//       { path: '/java-strings/string-pool', element: <StringPool /> },
//       { path: '/java-strings/formatting', element: <StringFormatting /> },
//       { path: '/java-strings/regex', element: <RegularExpression /> },

//       // OOP Routes
//       { path: '/java-oop/access-modifiers', element: <AccessModifiers /> },
//       { path: '/java-oop/abstract-classes', element: <AbstractClasses /> },
//       { path: '/java-oop/static-members', element: <StaticMembers /> },
//       { path: '/java-oop/final-keyword', element: <FinalKeyword /> },
//       { path: '/java-oop/package', element: <Package /> },
//       { path: '/java-oop/object-class', element: <ObjectClass /> },

//       // Exception Handling Routes
//       { path: '/java-exceptions/introduction', element: <ExceptionIntro /> },
//       { path: '/java-exceptions/try-catch', element: <TryCatch /> },
//       { path: '/java-exceptions/multiple-catch', element: <MultipleCatch /> },
//       { path: '/java-exceptions/throw-throws', element: <ThrowThrows /> },
//       { path: '/java-exceptions/finally', element: <FinallyBlock /> },
//       { path: '/java-exceptions/custom-exceptions', element: <CustomExceptions /> },
//       { path: '/java-exceptions/types', element: <ExceptionTypes /> },

//       // Collections Routes
//       { path: '/java-collections/set-interface', element: <SetInterface /> },
//       { path: '/java-collections/treemap', element: <TreeMap /> },
//       { path: '/java-collections/comparator', element: <Comparator /> },

//       // File Handling Routes
//       { path: '/java-files/introduction', element: <FileHandlingIntro /> },
//       { path: '/java-files/file-class', element: <FileClass /> },
//       { path: '/java-files/file-reader', element: <FileReader /> },
//       { path: '/java-files/file-writer', element: <FileWriter /> },
//       { path: '/java-files/buffered-reader', element: <BufferedReader /> },
//       { path: '/java-files/buffered-writer', element: <BufferedWriter /> },
//       { path: '/java-files/file-streams', element: <FileStreams /> },

//       { path: '/hands-on', element: <HandsOnPage /> },
//       { path: '/hands-on/basics', element: <BasicsPrintHello /> },
//     ],
//   },
// ]); 