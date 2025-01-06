import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypePage from './pages/TypePage';
import PlaygroundPage from './pages/PlaygroundPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import IntroductionBasics from './pages/java-basics/Introduction';
import HelloWorld from './pages/java-basics/HelloWorld';
import JavaSyntax from './pages/java-basics/JavaSyntax';
import Identifiers from './pages/java-basics/Identifiers';
import Keywords from './pages/java-basics/Keywords';
import DataTypes from './pages/java-basics/DataTypes';
import Variables from './pages/java-basics/Variables';
import VariableScope from './pages/java-basics/VariableScope';
import Operators from './pages/java-basics/Operators';
import UserInput from './pages/java-basics/UserInput';
import IfStatement from './pages/java-flow-control/IfStatement';
import IfElse from './pages/java-flow-control/IfElse';
import IfElseIf from './pages/java-flow-control/IfElseIf';
import ForLoop from './pages/java-flow-control/ForLoop';
import WhileLoop from './pages/java-flow-control/WhileLoop';
import DoWhile from './pages/java-flow-control/DoWhile';
import Break from './pages/java-flow-control/Break';
import Continue from './pages/java-flow-control/Continue';
import Return from './pages/java-flow-control/Return';
import MethodsIntro from './pages/java-methods/Intro';
import MethodDeclaration from './pages/java-methods/Declaration';
import MethodParameters from './pages/java-methods/Parameters';
import MethodCalling from './pages/java-methods/Calling';
import StaticVsInstance from './pages/java-methods/StaticVsInstance';
import AccessModifiers from './pages/java-methods/AccessModifiers';
import CommandLineArgs from './pages/java-methods/CommandLineArgs';
import Varargs from './pages/java-methods/Varargs';
import MethodOverloading from './pages/java-methods/Overloading';
import Recursion from './pages/java-methods/Recursion';
import IntroductionArrays from './pages/java-arrays/Introduction';
import Initialization from './pages/java-arrays/Initialization';
import Multidimensional from './pages/java-arrays/Multidimensional';
import JaggedArrays from './pages/java-arrays/JaggedArrays';
import ArrayClassMethods from './pages/java-arrays/ArrayClassMethods';
import StringIntroduction from './pages/java-strings/Introduction';
import StringImmutability from './pages/java-strings/Immutability';
import StringConcatenation from './pages/java-strings/Concatenation';
import StringClass from './pages/java-strings/StringClass';
import StringBuffer from './pages/java-strings/StringBuffer';
import StringBuilder from './pages/java-strings/StringBuilder';
import StringComparison from './pages/java-strings/Comparison';
import StringMethods from './pages/java-strings/Methods';
import OOPIntroduction from './pages/java-oop/Introduction';
import ClassesObjects from './pages/java-oop/ClassesObjects';
import Constructors from './pages/java-oop/Constructors';
import ObjectClass from './pages/java-oop/ObjectClass';
import Abstraction from './pages/java-oop/Abstraction';
import Encapsulation from './pages/java-oop/Encapsulation';
import Inheritance from './pages/java-oop/Inheritance';
import Polymorphism from './pages/java-oop/Polymorphism';
import MethodOverloadingOOP from './pages/java-oop/MethodOverloading';
import MethodOverriding from './pages/java-methods/MethodOverriding';
import Packages from './pages/java-oop/Packages';
import Switch from './pages/java-flow-control/Switch';
import ReturnTypes from './pages/java-methods/ReturnTypes';
import Interfaces from './pages/java-oop/Interfaces';
import InterfacesInheritance from './pages/java-oop/InterfacesInheritance';
import ClassVsInterface from './pages/java-oop/ClassVsInterface';
import FunctionalInterface from './pages/java-oop/FunctionalInterface';
import NestedInterface from './pages/java-oop/NestedInterface';
import MarkerInterface from './pages/java-oop/MarkerInterface';
import ComparatorInterface from './pages/java-oop/ComparatorInterface';
import CollectionsIntro from './pages/java-collections/Introduction';
import CollectionClasses from './pages/java-collections/CollectionClasses';
import CollectionInterface from './pages/java-collections/CollectionInterface';
import ListInterface from './pages/java-collections/ListInterface';
import ArrayList from './pages/java-collections/ArrayList';
import VectorClass from './pages/java-collections/Vector';
import LinkedList from './pages/java-collections/LinkedList';
import StackClass from './pages/java-collections/Stack';
import SetInterface from './pages/java-collections/Set';
import HashSet from './pages/java-collections/HashSet';
import TreeSet from './pages/java-collections/TreeSet';
import LinkedHashSet from './pages/java-collections/LinkedHashSet';
import QueueInterface from './pages/java-collections/QueueInterface';
import PriorityQueue from './pages/java-collections/PriorityQueue';
import DequeInterface from './pages/java-collections/DequeInterface';
import MapInterface from './pages/java-collections/MapInterface';
import HashMap from './pages/java-collections/HashMap';
import LinkedHashMap from './pages/java-collections/LinkedHashMap';
import Hashtable from './pages/java-collections/Hashtable';
import DictionaryClass from './pages/java-collections/Dictionary';
import SortedSetInterface from './pages/java-collections/SortedSet';
import ComparableInterface from './pages/java-collections/Comparable';
import ComparableVsComparator from './pages/java-collections/ComparableVsComparator';
import Iterator from './pages/java-collections/Iterator';
import JavaMCQs from "./pages/java-mcqs/JavaMCQs";
import Playground from './pages/playground/Playground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex pt-16">
          <aside className="w-64 fixed top-16 bottom-0 bg-gray-800 overflow-y-auto">
            <Sidebar />
          </aside>
          <main className="ml-64 flex-1 min-h-screen flex flex-col">
            <div className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/type/:typeName" element={<TypePage />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/java-basics/intro" element={<IntroductionBasics />} />
                <Route path="/java-basics/hello-world" element={<HelloWorld />} />
                <Route path="/java-basics/syntax" element={<JavaSyntax />} />
                <Route path="/java-basics/identifiers" element={<Identifiers />} />
                <Route path="/java-basics/keywords" element={<Keywords />} />
                <Route path="/java-basics/data-types" element={<DataTypes />} />
                <Route path="/java-basics/variables" element={<Variables />} />
                <Route path="/java-basics/variable-scope" element={<VariableScope />} />
                <Route path="/java-basics/operators" element={<Operators />} />
                <Route path="/java-basics/user-input" element={<UserInput />} />
                <Route path="/java-flow-control/if-statement" element={<IfStatement />} />
                <Route path="/java-flow-control/if-else" element={<IfElse />} />
                <Route path="/java-flow-control/if-else-if" element={<IfElseIf />} />
                <Route path="/java-flow-control/for-loop" element={<ForLoop />} />
                <Route path="/java-flow-control/while-loop" element={<WhileLoop />} />
                <Route path="/java-flow-control/do-while" element={<DoWhile />} />
                <Route path="/java-flow-control/break" element={<Break />} />
                <Route path="/java-flow-control/continue" element={<Continue />} />
                <Route path="/java-flow-control/return" element={<Return />} />
                <Route path="/java-flow-control/switch" element={<Switch />} />
                <Route path="/java-methods/intro" element={<MethodsIntro />} />
                <Route path="/java-methods/declaration" element={<MethodDeclaration />} />
                <Route path="/java-methods/parameters" element={<MethodParameters />} />
                <Route path="/java-methods/calling" element={<MethodCalling />} />
                <Route path="/java-methods/static-vs-instance" element={<StaticVsInstance />} />
                <Route path="/java-methods/access-modifiers" element={<AccessModifiers />} />
                <Route path="/java-methods/command-line-args" element={<CommandLineArgs />} />
                <Route path="/java-methods/varargs" element={<Varargs />} />
                <Route path="/java-methods/overloading" element={<MethodOverloading />} />
                <Route path="/java-methods/recursion" element={<Recursion />} />
                <Route path="/java-arrays/introduction" element={<IntroductionArrays />} />
                <Route path="/java-arrays/initialization" element={<Initialization />} />
                <Route path="/java-arrays/multidimensional" element={<Multidimensional />} />
                <Route path="/java-arrays/jagged-arrays" element={<JaggedArrays />} />
                <Route path="/java-arrays/array-class-methods" element={<ArrayClassMethods />} />
                <Route path="/java-strings/introduction" element={<StringIntroduction />} />
                <Route path="/java-strings/immutability" element={<StringImmutability />} />
                <Route path="/java-strings/concatenation" element={<StringConcatenation />} />
                <Route path="/java-strings/string-class" element={<StringClass />} />
                <Route path="/java-strings/string-buffer" element={<StringBuffer />} />
                <Route path="/java-strings/string-builder" element={<StringBuilder />} />
                <Route path="/java-strings/comparison" element={<StringComparison />} />
                <Route path="/java-strings/methods" element={<StringMethods />} />
                <Route path="/java-oop/introduction" element={<OOPIntroduction />} />
                <Route path="/java-oop/classes-objects" element={<ClassesObjects />} />
                <Route path="/java-oop/constructors" element={<Constructors />} />
                <Route path="/java-oop/object-class" element={<ObjectClass />} />
                <Route path="/java-oop/abstraction" element={<Abstraction />} />
                <Route path="/java-oop/encapsulation" element={<Encapsulation />} />
                <Route path="/java-oop/inheritance" element={<Inheritance />} />
                <Route path="/java-oop/polymorphism" element={<Polymorphism />} />
                <Route path="/java-oop/method-overloading" element={<MethodOverloadingOOP />} />
                <Route path="/java-methods/method-overriding" element={<MethodOverriding />} />
                <Route path="/java-oop/packages" element={<Packages />} />
                <Route path="/java-methods/return-types" element={<ReturnTypes />} />
                <Route path="/java-oop/interfaces" element={<Interfaces />} />
                <Route path="/java-oop/interfaces-inheritance" element={<InterfacesInheritance />} />
                <Route path="/java-oop/class-vs-interface" element={<ClassVsInterface />} />
                <Route path="/java-oop/functional-interface" element={<FunctionalInterface />} />
                <Route path="/java-oop/nested-interface" element={<NestedInterface />} />
                <Route path="/java-oop/marker-interface" element={<MarkerInterface />} />
                <Route path="/java-oop/comparator-interface" element={<ComparatorInterface />} />
                <Route path="/java-collections/introduction" element={<CollectionsIntro />} />
                <Route path="/java-collections/collection-classes" element={<CollectionClasses />} />
                <Route path="/java-collections/collection-interface" element={<CollectionInterface />} />
                <Route path="/java-collections/list-interface" element={<ListInterface />} />
                <Route path="/java-collections/array-list" element={<ArrayList />} />
                <Route path="/java-collections/vector" element={<VectorClass />} />
                <Route path="/java-collections/linked-list" element={<LinkedList />} />
                <Route path="/java-collections/stack" element={<StackClass />} />
                <Route path="/java-collections/set" element={<SetInterface />} />
                <Route path="/java-collections/hashset" element={<HashSet />} />
                <Route path="/java-collections/treeset" element={<TreeSet />} />
                <Route path="/java-collections/linked-hashset" element={<LinkedHashSet />} />
                <Route path="/java-collections/queue-interface" element={<QueueInterface />} />
                <Route path="/java-collections/priority-queue" element={<PriorityQueue />} />
                <Route path="/java-collections/deque-interface" element={<DequeInterface />} />
                <Route path="/java-collections/map-interface" element={<MapInterface />} />
                <Route path="/java-collections/hashmap" element={<HashMap />} />
                <Route path="/java-collections/linked-hashmap" element={<LinkedHashMap />} />
                <Route path="/java-collections/hashtable" element={<Hashtable />} />
                <Route path="/java-collections/dictionary" element={<DictionaryClass />} />
                <Route path="/java-collections/sorted-set" element={<SortedSetInterface />} />
                <Route path="/java-collections/comparable" element={<ComparableInterface />} />
                <Route path="/java-collections/comparable-vs-comparator" element={<ComparableVsComparator />} />
                <Route path="/java-collections/iterator" element={<Iterator />} />
                <Route path="/java-mcqs" element={<JavaMCQs />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <div className="bg-gray-800">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 