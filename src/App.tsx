import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Playground from './pages/playground/Playground';
import JavaMCQs from './pages/java-mcqs/JavaMCQs';
import HandsOnPage from './pages/hands-on/HandsOnPage';
import BasicsPrintHello from './pages/hands-on/basics/BasicsPrintHello';

// Java Basics
import Introduction from './pages/java-basics/Introduction';
import HelloWorld from './pages/java-basics/HelloWorld';
import JavaSyntax from './pages/java-basics/JavaSyntax';
import Identifiers from './pages/java-basics/Identifiers';
import Keywords from './pages/java-basics/Keywords';
import DataTypes from './pages/java-basics/DataTypes';
import Variables from './pages/java-basics/Variables';
import VariableScope from './pages/java-basics/VariableScope';
import Operators from './pages/java-basics/Operators';
import UserInput from './pages/java-basics/UserInput';
import TypeCasting from './pages/java-basics/TypeCasting';
import Comments from './pages/java-basics/Comments';

// Flow Control
import IfStatement from './pages/java-flow-control/IfStatement';
import IfElse from './pages/java-flow-control/IfElse';
import IfElseIf from './pages/java-flow-control/IfElseIf';
import Switch from './pages/java-flow-control/Switch';
import ForLoop from './pages/java-flow-control/ForLoop';
import WhileLoop from './pages/java-flow-control/WhileLoop';
import DoWhile from './pages/java-flow-control/DoWhile';
import Break from './pages/java-flow-control/Break';
import Continue from './pages/java-flow-control/Continue';
import Return from './pages/java-flow-control/Return';
import EnhancedFor from './pages/java-flow-control/EnhancedFor';

// Methods
import MethodIntro from './pages/java-methods/Intro';
import MethodDeclaration from './pages/java-methods/Declaration';
import MethodParameters from './pages/java-methods/Parameters';
import MethodCalling from './pages/java-methods/Calling';
import StaticVsInstance from './pages/java-methods/StaticVsInstance';
import MethodAccessModifiers from './pages/java-methods/AccessModifiers';
import CommandLineArgs from './pages/java-methods/CommandLineArgs';
import Varargs from './pages/java-methods/Varargs';
import MethodOverloading from './pages/java-methods/Overloading';
import Recursion from './pages/java-methods/Recursion';
import PassByValue from './pages/java-methods/PassByValue';

// Arrays
import ArrayIntro from './pages/java-arrays/Introduction';
import ArrayDeclaration from './pages/java-arrays/Declaration';
import ArrayInitialization from './pages/java-arrays/Initialization';
import ArrayAccess from './pages/java-arrays/Access';
import Multidimensional from './pages/java-arrays/Multidimensional';
import JaggedArrays from './pages/java-arrays/JaggedArrays';
import ArrayMethods from './pages/java-arrays/ArrayClassMethods';
import ArraySorting from './pages/java-arrays/Sorting';
import ArraySearching from './pages/java-arrays/Searching';
import ArrayCopy from './pages/java-arrays/Copy';

// Strings
import StringIntro from './pages/java-strings/Introduction';
import StringCreation from './pages/java-strings/Creation';
import StringMethods from './pages/java-strings/Methods';
import StringPool from './pages/java-strings/StringPool';
import StringImmutability from './pages/java-strings/Immutability';
import StringComparison from './pages/java-strings/Comparison';
import StringBuffer from './pages/java-strings/StringBuffer';
import StringBuilder from './pages/java-strings/StringBuilder';
import StringFormatting from './pages/java-strings/Formatting';
import RegularExpression from './pages/java-strings/RegularExpression';

// OOP
import OOPIntro from './pages/java-oop/Introduction';
import ClassesObjects from './pages/java-oop/ClassesObjects';
import Constructors from './pages/java-oop/Constructors';
import AccessModifiers from './pages/java-oop/AccessModifiers';
import Encapsulation from './pages/java-oop/Encapsulation';
import Inheritance from './pages/java-oop/Inheritance';
import Polymorphism from './pages/java-oop/Polymorphism';
import Abstraction from './pages/java-oop/Abstraction';
import Interfaces from './pages/java-oop/Interfaces';
import AbstractClasses from './pages/java-oop/AbstractClasses';
import StaticMembers from './pages/java-oop/StaticMembers';
import FinalKeyword from './pages/java-oop/FinalKeyword';
import Package from './pages/java-oop/Package';
import ObjectClass from './pages/java-oop/ObjectClass';

// Exception Handling
import ExceptionIntro from './pages/java-exceptions/Introduction';
import TryCatch from './pages/java-exceptions/TryCatch';
import MultipleCatch from './pages/java-exceptions/MultipleCatch';
import ThrowThrows from './pages/java-exceptions/ThrowThrows';
import FinallyBlock from './pages/java-exceptions/FinallyBlock';
import CustomExceptions from './pages/java-exceptions/CustomExceptions';
import ExceptionTypes from './pages/java-exceptions/ExceptionTypes';

// Collections
import CollectionIntro from './pages/java-collections/Introduction';
import CollectionInterface from './pages/java-collections/CollectionInterface';
import ListInterface from './pages/java-collections/ListInterface';
import ArrayList from './pages/java-collections/ArrayList';
import LinkedList from './pages/java-collections/LinkedList';
import Vector from './pages/java-collections/Vector';
import Stack from './pages/java-collections/Stack';
import QueueInterface from './pages/java-collections/QueueInterface';
import PriorityQueue from './pages/java-collections/PriorityQueue';
import DequeInterface from './pages/java-collections/DequeInterface';
import SetInterface from './pages/java-collections/SetInterface';
import HashSet from './pages/java-collections/HashSet';
import LinkedHashSet from './pages/java-collections/LinkedHashSet';
import TreeSet from './pages/java-collections/TreeSet';
import MapInterface from './pages/java-collections/MapInterface';
import HashMap from './pages/java-collections/HashMap';
import LinkedHashMap from './pages/java-collections/LinkedHashMap';
import TreeMap from './pages/java-collections/TreeMap';
import Hashtable from './pages/java-collections/Hashtable';
import Comparable from './pages/java-collections/Comparable';
import Comparator from './pages/java-collections/Comparator';
import Iterator from './pages/java-collections/Iterator';

// File Handling
import FileIntro from './pages/java-files/Introduction';
import FileClass from './pages/java-files/FileClass';
import FileReader from './pages/java-files/FileReader';
import FileWriter from './pages/java-files/FileWriter';
import BufferedReader from './pages/java-files/BufferedReader';
import BufferedWriter from './pages/java-files/BufferedWriter';
import FileStreams from './pages/java-files/FileStreams';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-64">
            <div className="pt-16">
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/java-mcqs" element={<JavaMCQs />} />
                  <Route path="/hands-on" element={<HandsOnPage />} />
                  <Route path="/hands-on/basics" element={<BasicsPrintHello />} />

                  {/* Java Basics Routes */}
                  <Route path="/java-basics/introduction" element={<Introduction />} />
                  <Route path="/java-basics/hello-world" element={<HelloWorld />} />
                  <Route path="/java-basics/java-syntax" element={<JavaSyntax />} />
                  <Route path="/java-basics/identifiers" element={<Identifiers />} />
                  <Route path="/java-basics/keywords" element={<Keywords />} />
                  <Route path="/java-basics/data-types" element={<DataTypes />} />
                  <Route path="/java-basics/variables" element={<Variables />} />
                  <Route path="/java-basics/variable-scope" element={<VariableScope />} />
                  <Route path="/java-basics/operators" element={<Operators />} />
                  <Route path="/java-basics/user-input" element={<UserInput />} />
                  <Route path="/java-basics/type-casting" element={<TypeCasting />} />
                  <Route path="/java-basics/comments" element={<Comments />} />

                  {/* Flow Control Routes */}
                  <Route path="/java-flow-control/if-statement" element={<IfStatement />} />
                  <Route path="/java-flow-control/if-else" element={<IfElse />} />
                  <Route path="/java-flow-control/if-else-if" element={<IfElseIf />} />
                  <Route path="/java-flow-control/switch" element={<Switch />} />
                  <Route path="/java-flow-control/for-loop" element={<ForLoop />} />
                  <Route path="/java-flow-control/while-loop" element={<WhileLoop />} />
                  <Route path="/java-flow-control/do-while" element={<DoWhile />} />
                  <Route path="/java-flow-control/break" element={<Break />} />
                  <Route path="/java-flow-control/continue" element={<Continue />} />
                  <Route path="/java-flow-control/return" element={<Return />} />
                  <Route path="/java-flow-control/enhanced-for" element={<EnhancedFor />} />

                  {/* Methods Routes */}
                  <Route path="/java-methods/intro" element={<MethodIntro />} />
                  <Route path="/java-methods/declaration" element={<MethodDeclaration />} />
                  <Route path="/java-methods/parameters" element={<MethodParameters />} />
                  <Route path="/java-methods/calling" element={<MethodCalling />} />
                  <Route path="/java-methods/static-vs-instance" element={<StaticVsInstance />} />
                  <Route path="/java-methods/access-modifiers" element={<MethodAccessModifiers />} />
                  <Route path="/java-methods/command-line-args" element={<CommandLineArgs />} />
                  <Route path="/java-methods/varargs" element={<Varargs />} />
                  <Route path="/java-methods/overloading" element={<MethodOverloading />} />
                  <Route path="/java-methods/recursion" element={<Recursion />} />
                  <Route path="/java-methods/pass-by-value" element={<PassByValue />} />

                  {/* Arrays Routes */}
                  <Route path="/java-arrays/introduction" element={<ArrayIntro />} />
                  <Route path="/java-arrays/declaration" element={<ArrayDeclaration />} />
                  <Route path="/java-arrays/initialization" element={<ArrayInitialization />} />
                  <Route path="/java-arrays/access" element={<ArrayAccess />} />
                  <Route path="/java-arrays/multidimensional" element={<Multidimensional />} />
                  <Route path="/java-arrays/jagged-arrays" element={<JaggedArrays />} />
                  <Route path="/java-arrays/methods" element={<ArrayMethods />} />
                  <Route path="/java-arrays/sorting" element={<ArraySorting />} />
                  <Route path="/java-arrays/searching" element={<ArraySearching />} />
                  <Route path="/java-arrays/copy" element={<ArrayCopy />} />

                  {/* Strings Routes */}
                  <Route path="/java-strings/introduction" element={<StringIntro />} />
                  <Route path="/java-strings/creation" element={<StringCreation />} />
                  <Route path="/java-strings/methods" element={<StringMethods />} />
                  <Route path="/java-strings/string-pool" element={<StringPool />} />
                  <Route path="/java-strings/immutability" element={<StringImmutability />} />
                  <Route path="/java-strings/comparison" element={<StringComparison />} />
                  <Route path="/java-strings/string-buffer" element={<StringBuffer />} />
                  <Route path="/java-strings/string-builder" element={<StringBuilder />} />
                  <Route path="/java-strings/formatting" element={<StringFormatting />} />
                  <Route path="/java-strings/regex" element={<RegularExpression />} />

                  {/* OOP Routes */}
                  <Route path="/java-oop/introduction" element={<OOPIntro />} />
                  <Route path="/java-oop/classes-objects" element={<ClassesObjects />} />
                  <Route path="/java-oop/constructors" element={<Constructors />} />
                  <Route path="/java-oop/access-modifiers" element={<AccessModifiers />} />
                  <Route path="/java-oop/encapsulation" element={<Encapsulation />} />
                  <Route path="/java-oop/inheritance" element={<Inheritance />} />
                  <Route path="/java-oop/polymorphism" element={<Polymorphism />} />
                  <Route path="/java-oop/abstraction" element={<Abstraction />} />
                  <Route path="/java-oop/interfaces" element={<Interfaces />} />
                  <Route path="/java-oop/abstract-classes" element={<AbstractClasses />} />
                  <Route path="/java-oop/static-members" element={<StaticMembers />} />
                  <Route path="/java-oop/final-keyword" element={<FinalKeyword />} />
                  <Route path="/java-oop/package" element={<Package />} />
                  <Route path="/java-oop/object-class" element={<ObjectClass />} />

                  {/* Exception Handling Routes */}
                  <Route path="/java-exceptions/introduction" element={<ExceptionIntro />} />
                  <Route path="/java-exceptions/try-catch" element={<TryCatch />} />
                  <Route path="/java-exceptions/multiple-catch" element={<MultipleCatch />} />
                  <Route path="/java-exceptions/throw-throws" element={<ThrowThrows />} />
                  <Route path="/java-exceptions/finally" element={<FinallyBlock />} />
                  <Route path="/java-exceptions/custom-exceptions" element={<CustomExceptions />} />
                  <Route path="/java-exceptions/types" element={<ExceptionTypes />} />

                  {/* Collections Routes */}
                  <Route path="/java-collections/introduction" element={<CollectionIntro />} />
                  <Route path="/java-collections/collection-interface" element={<CollectionInterface />} />
                  <Route path="/java-collections/list-interface" element={<ListInterface />} />
                  <Route path="/java-collections/array-list" element={<ArrayList />} />
                  <Route path="/java-collections/linked-list" element={<LinkedList />} />
                  <Route path="/java-collections/vector" element={<Vector />} />
                  <Route path="/java-collections/stack" element={<Stack />} />
                  <Route path="/java-collections/queue-interface" element={<QueueInterface />} />
                  <Route path="/java-collections/priority-queue" element={<PriorityQueue />} />
                  <Route path="/java-collections/deque-interface" element={<DequeInterface />} />
                  <Route path="/java-collections/set-interface" element={<SetInterface />} />
                  <Route path="/java-collections/hashset" element={<HashSet />} />
                  <Route path="/java-collections/linked-hashset" element={<LinkedHashSet />} />
                  <Route path="/java-collections/treeset" element={<TreeSet />} />
                  <Route path="/java-collections/map-interface" element={<MapInterface />} />
                  <Route path="/java-collections/hashmap" element={<HashMap />} />
                  <Route path="/java-collections/linked-hashmap" element={<LinkedHashMap />} />
                  <Route path="/java-collections/treemap" element={<TreeMap />} />
                  <Route path="/java-collections/hashtable" element={<Hashtable />} />
                  <Route path="/java-collections/comparable" element={<Comparable />} />
                  <Route path="/java-collections/comparator" element={<Comparator />} />
                  <Route path="/java-collections/iterator" element={<Iterator />} />

                  {/* File Handling Routes */}
                  <Route path="/java-files/introduction" element={<FileIntro />} />
                  <Route path="/java-files/file-class" element={<FileClass />} />
                  <Route path="/java-files/file-reader" element={<FileReader />} />
                  <Route path="/java-files/file-writer" element={<FileWriter />} />
                  <Route path="/java-files/buffered-reader" element={<BufferedReader />} />
                  <Route path="/java-files/buffered-writer" element={<BufferedWriter />} />
                  <Route path="/java-files/file-streams" element={<FileStreams />} />

                  {/* Catch all route */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 

// import MethodCalling from './pages/methods/Calling';
// import StaticVsInstance from './pages/methods/StaticVsInstance';
// import MethodAccessModifiers from './pages/methods/AccessModifiers';
// import CommandLineArgs from './pages/methods/CommandLineArgs';
// import Varargs from './pages/methods/Varargs';
// import MethodOverloading from './pages/methods/Overloading';
// import Recursion from './pages/methods/Recursion';
// import PassByValue from './pages/methods/PassByValue';

// // Arrays
// import ArrayIntro from './pages/arrays/Introduction';
// import ArrayDeclaration from './pages/arrays/Declaration';
// import ArrayInitialization from './pages/arrays/Initialization';
// import ArrayAccess from './pages/arrays/Access';
// import Multidimensional from './pages/arrays/Multidimensional';
// import JaggedArrays from './pages/arrays/JaggedArrays';
// import ArrayMethods from './pages/arrays/Methods';
// import ArraySorting from './pages/arrays/Sorting';
// import ArraySearching from './pages/arrays/Searching';
// import ArrayCopy from './pages/arrays/Copy';

// // Strings
// import StringIntro from './pages/strings/Introduction';
// import StringCreation from './pages/strings/Creation';
// import StringMethods from './pages/strings/Methods';
// import StringPool from './pages/strings/StringPool';
// import StringImmutability from './pages/strings/Immutability';
// import StringComparison from './pages/strings/Comparison';
// import StringBuffer from './pages/strings/StringBuffer';
// import StringBuilder from './pages/strings/StringBuilder';
// import StringFormatting from './pages/strings/Formatting';
// import RegularExpression from './pages/strings/RegularExpression';

// // OOP
// import OOPIntro from './pages/oop/Introduction';
// import ClassesObjects from './pages/oop/ClassesObjects';
// import Constructors from './pages/oop/Constructors';
// import AccessModifiers from './pages/oop/AccessModifiers';
// import Encapsulation from './pages/oop/Encapsulation';
// import Inheritance from './pages/oop/Inheritance';
// import Polymorphism from './pages/oop/Polymorphism';
// import Abstraction from './pages/oop/Abstraction';
// import Interfaces from './pages/oop/Interfaces';
// import AbstractClasses from './pages/oop/AbstractClasses';
// import StaticMembers from './pages/oop/StaticMembers';
// import FinalKeyword from './pages/oop/FinalKeyword';
// import Package from './pages/oop/Package';
// import ObjectClass from './pages/oop/ObjectClass';

// // Exception Handling
// import ExceptionIntro from './pages/exceptions/Introduction';
// import TryCatch from './pages/exceptions/TryCatch';
// import MultipleCatch from './pages/exceptions/MultipleCatch';
// import ThrowThrows from './pages/exceptions/ThrowThrows';
// import FinallyBlock from './pages/exceptions/FinallyBlock';
// import CustomExceptions from './pages/exceptions/CustomExceptions';
// import ExceptionTypes from './pages/exceptions/ExceptionTypes';

// // Collections
// import CollectionIntro from './pages/collections/Introduction';
// import CollectionInterface from './pages/collections/CollectionInterface';
// import ListInterface from './pages/collections/ListInterface';
// import ArrayList from './pages/collections/ArrayList';
// import LinkedList from './pages/collections/LinkedList';
// import Vector from './pages/collections/Vector';
// import Stack from './pages/collections/Stack';
// import QueueInterface from './pages/collections/QueueInterface';
// import PriorityQueue from './pages/collections/PriorityQueue';
// import DequeInterface from './pages/collections/DequeInterface';
// import SetInterface from './pages/collections/SetInterface';
// import HashSet from './pages/collections/HashSet';
// import LinkedHashSet from './pages/collections/LinkedHashSet';
// import TreeSet from './pages/collections/TreeSet';
// import MapInterface from './pages/collections/MapInterface';
// import HashMap from './pages/collections/HashMap';
// import LinkedHashMap from './pages/collections/LinkedHashMap';
// import TreeMap from './pages/collections/TreeMap';
// import Hashtable from './pages/collections/Hashtable';
// import Comparable from './pages/collections/Comparable';
// import Comparator from './pages/collections/Comparator';
// import Iterator from './pages/collections/Iterator';

// // File Handling
// import FileIntro from './pages/files/Introduction';
// import FileClass from './pages/files/FileClass';
// import FileReader from './pages/files/FileReader';
// import FileWriter from './pages/files/FileWriter';
// import BufferedReader from './pages/files/BufferedReader';
// import BufferedWriter from './pages/files/BufferedWriter';
// import FileStreams from './pages/files/FileStreams';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900">
//         <Navbar />
//         <div className="flex">
//           <Sidebar />
//           <div className="flex-1 ml-64">
//             <div className="pt-16">
//               <main className="container mx-auto px-4 py-8">
//                 <Routes>
//                   {/* Main Routes */}
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/playground" element={<Playground />} />
//                   <Route path="/java-mcqs" element={<JavaMCQs />} />
//                   <Route path="/hands-on" element={<HandsOnPage />} />
//                   <Route path="/hands-on/basics" element={<BasicsPrintHello />} />

//                   {/* Java Basics Routes */}
//                   <Route path="/java-basics/introduction" element={<Introduction />} />
//                   <Route path="/java-basics/hello-world" element={<HelloWorld />} />
//                   <Route path="/java-basics/java-syntax" element={<JavaSyntax />} />
//                   <Route path="/java-basics/identifiers" element={<Identifiers />} />
//                   <Route path="/java-basics/keywords" element={<Keywords />} />
//                   <Route path="/java-basics/data-types" element={<DataTypes />} />
//                   <Route path="/java-basics/variables" element={<Variables />} />
//                   <Route path="/java-basics/variable-scope" element={<VariableScope />} />
//                   <Route path="/java-basics/operators" element={<Operators />} />
//                   <Route path="/java-basics/user-input" element={<UserInput />} />
//                   <Route path="/java-basics/type-casting" element={<TypeCasting />} />
//                   <Route path="/java-basics/comments" element={<Comments />} />

//                   {/* Flow Control Routes */}
//                   <Route path="/java-flow-control/if-statement" element={<IfStatement />} />
//                   <Route path="/java-flow-control/if-else" element={<IfElse />} />
//                   <Route path="/java-flow-control/if-else-if" element={<IfElseIf />} />
//                   <Route path="/java-flow-control/switch" element={<Switch />} />
//                   <Route path="/java-flow-control/for-loop" element={<ForLoop />} />
//                   <Route path="/java-flow-control/while-loop" element={<WhileLoop />} />
//                   <Route path="/java-flow-control/do-while" element={<DoWhile />} />
//                   <Route path="/java-flow-control/break" element={<Break />} />
//                   <Route path="/java-flow-control/continue" element={<Continue />} />
//                   <Route path="/java-flow-control/return" element={<Return />} />
//                   <Route path="/java-flow-control/enhanced-for" element={<EnhancedFor />} />

//                   {/* Methods Routes */}
//                   <Route path="/java-methods/intro" element={<MethodIntro />} />
//                   <Route path="/java-methods/declaration" element={<MethodDeclaration />} />
//                   <Route path="/java-methods/parameters" element={<MethodParameters />} />
//                   <Route path="/java-methods/calling" element={<MethodCalling />} />
//                   <Route path="/java-methods/static-vs-instance" element={<StaticVsInstance />} />
//                   <Route path="/java-methods/access-modifiers" element={<MethodAccessModifiers />} />
//                   <Route path="/java-methods/command-line-args" element={<CommandLineArgs />} />
//                   <Route path="/java-methods/varargs" element={<Varargs />} />
//                   <Route path="/java-methods/overloading" element={<MethodOverloading />} />
//                   <Route path="/java-methods/recursion" element={<Recursion />} />
//                   <Route path="/java-methods/pass-by-value" element={<PassByValue />} />

//                   {/* Arrays Routes */}
//                   <Route path="/java-arrays/introduction" element={<ArrayIntro />} />
//                   <Route path="/java-arrays/declaration" element={<ArrayDeclaration />} />
//                   <Route path="/java-arrays/initialization" element={<ArrayInitialization />} />
//                   <Route path="/java-arrays/access" element={<ArrayAccess />} />
//                   <Route path="/java-arrays/multidimensional" element={<Multidimensional />} />
//                   <Route path="/java-arrays/jagged-arrays" element={<JaggedArrays />} />
//                   <Route path="/java-arrays/methods" element={<ArrayMethods />} />
//                   <Route path="/java-arrays/sorting" element={<ArraySorting />} />
//                   <Route path="/java-arrays/searching" element={<ArraySearching />} />
//                   <Route path="/java-arrays/copy" element={<ArrayCopy />} />

//                   {/* Strings Routes */}
//                   <Route path="/java-strings/introduction" element={<StringIntro />} />
//                   <Route path="/java-strings/creation" element={<StringCreation />} />
//                   <Route path="/java-strings/methods" element={<StringMethods />} />
//                   <Route path="/java-strings/string-pool" element={<StringPool />} />
//                   <Route path="/java-strings/immutability" element={<StringImmutability />} />
//                   <Route path="/java-strings/comparison" element={<StringComparison />} />
//                   <Route path="/java-strings/string-buffer" element={<StringBuffer />} />
//                   <Route path="/java-strings/string-builder" element={<StringBuilder />} />
//                   <Route path="/java-strings/formatting" element={<StringFormatting />} />
//                   <Route path="/java-strings/regex" element={<RegularExpression />} />

//                   {/* OOP Routes */}
//                   <Route path="/java-oop/introduction" element={<OOPIntro />} />
//                   <Route path="/java-oop/classes-objects" element={<ClassesObjects />} />
//                   <Route path="/java-oop/constructors" element={<Constructors />} />
//                   <Route path="/java-oop/access-modifiers" element={<AccessModifiers />} />
//                   <Route path="/java-oop/encapsulation" element={<Encapsulation />} />
//                   <Route path="/java-oop/inheritance" element={<Inheritance />} />
//                   <Route path="/java-oop/polymorphism" element={<Polymorphism />} />
//                   <Route path="/java-oop/abstraction" element={<Abstraction />} />
//                   <Route path="/java-oop/interfaces" element={<Interfaces />} />
//                   <Route path="/java-oop/abstract-classes" element={<AbstractClasses />} />
//                   <Route path="/java-oop/static-members" element={<StaticMembers />} />
//                   <Route path="/java-oop/final-keyword" element={<FinalKeyword />} />
//                   <Route path="/java-oop/package" element={<Package />} />
//                   <Route path="/java-oop/object-class" element={<ObjectClass />} />

//                   {/* Exception Handling Routes */}
//                   <Route path="/java-exceptions/introduction" element={<ExceptionIntro />} />
//                   <Route path="/java-exceptions/try-catch" element={<TryCatch />} />
//                   <Route path="/java-exceptions/multiple-catch" element={<MultipleCatch />} />
//                   <Route path="/java-exceptions/throw-throws" element={<ThrowThrows />} />
//                   <Route path="/java-exceptions/finally" element={<FinallyBlock />} />
//                   <Route path="/java-exceptions/custom-exceptions" element={<CustomExceptions />} />
//                   <Route path="/java-exceptions/types" element={<ExceptionTypes />} />

//                   {/* Collections Routes */}
//                   <Route path="/java-collections/introduction" element={<CollectionIntro />} />
//                   <Route path="/java-collections/collection-interface" element={<CollectionInterface />} />
//                   <Route path="/java-collections/list-interface" element={<ListInterface />} />
//                   <Route path="/java-collections/array-list" element={<ArrayList />} />
//                   <Route path="/java-collections/linked-list" element={<LinkedList />} />
//                   <Route path="/java-collections/vector" element={<Vector />} />
//                   <Route path="/java-collections/stack" element={<Stack />} />
//                   <Route path="/java-collections/queue-interface" element={<QueueInterface />} />
//                   <Route path="/java-collections/priority-queue" element={<PriorityQueue />} />
//                   <Route path="/java-collections/deque-interface" element={<DequeInterface />} />
//                   <Route path="/java-collections/set-interface" element={<SetInterface />} />
//                   <Route path="/java-collections/hashset" element={<HashSet />} />
//                   <Route path="/java-collections/linked-hashset" element={<LinkedHashSet />} />
//                   <Route path="/java-collections/treeset" element={<TreeSet />} />
//                   <Route path="/java-collections/map-interface" element={<MapInterface />} />
//                   <Route path="/java-collections/hashmap" element={<HashMap />} />
//                   <Route path="/java-collections/linked-hashmap" element={<LinkedHashMap />} />
//                   <Route path="/java-collections/treemap" element={<TreeMap />} />
//                   <Route path="/java-collections/hashtable" element={<Hashtable />} />
//                   <Route path="/java-collections/comparable" element={<Comparable />} />
//                   <Route path="/java-collections/comparator" element={<Comparator />} />
//                   <Route path="/java-collections/iterator" element={<Iterator />} />

//                   {/* File Handling Routes */}
//                   <Route path="/java-files/introduction" element={<FileIntro />} />
//                   <Route path="/java-files/file-class" element={<FileClass />} />
//                   <Route path="/java-files/file-reader" element={<FileReader />} />
//                   <Route path="/java-files/file-writer" element={<FileWriter />} />
//                   <Route path="/java-files/buffered-reader" element={<BufferedReader />} />
//                   <Route path="/java-files/buffered-writer" element={<BufferedWriter />} />
//                   <Route path="/java-files/file-streams" element={<FileStreams />} />

//                   {/* Catch all route */}
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;