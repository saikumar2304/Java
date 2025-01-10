import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const PassByValue: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Understanding Pass by Value in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is Pass by Value?</h2>
          <p>
            In Java, all method arguments are passed by value. This means that when a method is called, the value of each argument is copied and passed into the method. Any changes made to the parameters within the method do not affect the original arguments outside the method.
          </p>
        </section>

        {/* Example Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Example: Pass by Value</h2>
          <p className="mb-4">
            Let’s explore an example where a primitive type is passed as an argument to a method:
          </p>
          <CodeBlock
            code={`public class PassByValueExample {
    public static void main(String[] args) {
        int number = 10;
        System.out.println("Before method call: " + number);
        modifyValue(number);
        System.out.println("After method call: " + number);
    }

    public static void modifyValue(int value) {
        value = 20;
        System.out.println("Inside method: " + value);
    }
}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the method <code>modifyValue</code> changes the value of the parameter <code>value</code>, but the original variable <code>number</code> in the main method remains unchanged. This demonstrates pass by value in action.
          </p>
        </section>

        {/* Reference Types Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What About Reference Types?</h2>
          <p className="mb-4">
            When reference types (e.g., objects) are passed to a method, the reference (memory address) is passed by value. This means the method receives a copy of the reference, and changes to the object's fields will reflect outside the method. However, reassigning the reference itself inside the method does not affect the original object.
          </p>
          <CodeBlock
            code={`class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

public class PassByValueExample {
    public static void main(String[] args) {
        Person person = new Person("Alice");
        System.out.println("Before method call: " + person.name);
        modifyPerson(person);
        System.out.println("After method call: " + person.name);
    }

    public static void modifyPerson(Person p) {
        p.name = "Bob"; // Changes the field value
        p = new Person("Charlie"); // Reassigning the reference
        System.out.println("Inside method: " + p.name);
    }
}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the <code>name</code> field of the object <code>person</code> is modified inside the method, which reflects outside the method. However, reassigning the reference <code>p</code> inside the method does not affect the original object.
          </p>
        </section>

        {/* Key Takeaways Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Takeaways</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Java is strictly pass by value, whether dealing with primitive or reference types.
            </li>
            <li>
              For primitive types, the value is copied, so changes inside the method do not affect the original variable.
            </li>
            <li>
              For reference types, the reference is copied, allowing modifications to the object's fields but not its reference.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default PassByValue;
