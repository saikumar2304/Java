function shuffleOptions(mcqs: any[]) {
    mcqs.forEach(mcq => {
      // Fisher-Yates shuffle algorithm
      const options = mcq.options;
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
    });
}

export const oopMCQs = [
    {
      "id": 1,
      "question": `What will be the output of the following Java code?
      \`\`\`java
      class TrickyShort {
          private int val;
          public TrickyShort(int v) { val = v; }
          public int compute(int x) {
              return val++ + (x = ++val * 2) - val--;
          }
          public static void main(String[] args) {
              TrickyShort ts = new TrickyShort(3);
              int result = ts.compute(5);
              System.out.println(result + " " + ts.val);
          }
      }
      \`\`\``,
      "options": [
        { "text": "7 5", "isCorrect": false },
        { "text": "5 4", "isCorrect": false },
        { "text": "9 4", "isCorrect": true },
        { "text": "Compilation Error", "isCorrect": false }
      ],
      "explanation": "Operator precedence plays a role here. The calculation proceeds step by step, updating `val` accordingly.",
      "difficulty": "Hard",
      "category": "Operator Precedence",
      "hasCode": true
    },
    {
      "id": 2,
      "question": `What happens in this tricky inheritance case?
      \`\`\`java
      class Parent {
          void display() { System.out.println("Parent"); }
      }
      class Child extends Parent {
          void display() { System.out.println("Child"); }
      }
      class GrandChild extends Child {
          void display() { super.super.display(); }
      }
      public class Test {
          public static void main(String[] args) {
              GrandChild obj = new GrandChild();
              obj.display();
          }
      }
      \`\`\``,
      "options": [
        { "text": "Parent", "isCorrect": false },
        { "text": "Child", "isCorrect": false },
        { "text": "Compilation Error", "isCorrect": true },
        { "text": "Runtime Error", "isCorrect": false }
      ],
      "explanation": "Java does not support `super.super`, which would access the grandparent class. This results in a compilation error.",
      "difficulty": "Hard",
      "category": "Inheritance",
      "hasCode": true
    },
    {
      "id": 3,
      "question": `What is the issue with the following Java code?
      \`\`\`java
      class InvitationPrintRequest {
          private int noOfCopies;
          private int noOfPages;
          private double price;
  
          public InvitationPrintRequest(int noOfCopies, int noOfPages) {
              this.noOfCopies = noOfCopies;
              this.noOfPages = noOfPages;
          }
  
          public void calculatePrice() {
              double basicPrice = this.noOfPages * 2;
              double finalPrice = basicPrice * 50;
              double discount = this.calculateDiscount(finalPrice);
              this.setPrice(finalPrice - discount);
          }
  
          public double calculateDiscount(double finalPrice) {
              double baseDiscount;
              if (this.noOfCopies >= 25 && this.noOfPages > 15) {
                  baseDiscount = finalPrice * 0.20;
              } else {
                  baseDiscount = finalPrice * 0.10;
              }
              return baseDiscount;
          }
  
          public void setPrice(double price) {
              this.price = price;
          }
  
          public double getPrice() {
              return this.price;
          }
  
          public static void main(String[] args) {
              InvitationPrintRequest invitationObj = new InvitationPrintRequest(20, 20);
              invitationObj.calculatePrice();
              System.out.println(invitationObj.getPrice());
          }
      }
      \`\`\``,
      "options": [
        { "text": "Syntax Error", "isCorrect": false },
        { "text": "Logic Error", "isCorrect": true },
        { "text": "Compilation Error", "isCorrect": false },
        { "text": "Runtime Error", "isCorrect": false }
      ],
      "explanation": "There's a logic error: if `noOfCopies` is 20 and `noOfPages` is 20, the discount applied will be only 10%, whereas the expected discount should be 20%. This is because `noOfCopies >= 25` condition is false.",
      "difficulty": "Hard",
      "category": "Logic Errors",
      "hasCode": true
    },
    {
      "id": 4,
      "question": `What will be the output of this floating-point precision case?
      \`\`\`java
      public class Test {
          public static void main(String[] args) {
              double x = 0.1 + 0.2;
              System.out.println(x == 0.3);
          }
      }
      \`\`\``,
      "options": [
        { "text": "true", "isCorrect": false },
        { "text": "false", "isCorrect": true },
        { "text": "Compilation Error", "isCorrect": false },
        { "text": "Runtime Error", "isCorrect": false }
      ],
      "explanation": "Floating-point arithmetic precision makes `0.1 + 0.2` slightly different from `0.3`, leading to `false`.",
      "difficulty": "Hard",
      "category": "Floating-Point Precision",
      "hasCode": true
    },
    {
      "id": 5,
      "question": `What is the output of the following tricky constructor chaining?
      \`\`\`java
      class A {
          A() { System.out.println("A constructor"); }
      }
      class B extends A {
          B() { System.out.println("B constructor"); }
      }
      class C extends B {
          C() { System.out.println("C constructor"); }
      }
      public class Test {
          public static void main(String[] args) {
              C obj = new C();
          }
      }
      \`\`\``,
      "options": [
        { "text": "C constructor", "isCorrect": false },
        { "text": "A constructor B constructor C constructor", "isCorrect": true },
        { "text": "Compilation Error", "isCorrect": false },
        { "text": "Runtime Error", "isCorrect": false }
      ],
      "explanation": "Constructor chaining ensures that parent class constructors are called first, leading to `A constructor B constructor C constructor`.",
      "difficulty": "Hard",
      "category": "Constructor Chaining",
      "hasCode": true
    },
    {
        "id": 6,
        "question": `What will be the output of the following Java code?
        \`\`\`java
        class Test {
            static int x = 5;
            public static void main(String[] args) {
                int y = x++ + ++x * 2 - x--;
                System.out.println(y + " " + x);
            }
        }
        \`\`\``,
        "options": [
            { "text": "14 6", "isCorrect": false },
            { "text": "16 6", "isCorrect": false },
            { "text": "15 6", "isCorrect": true },
            { "text": "Compilation Error", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. \`x = 5\`
        2. \`x++\` → Post-increment: Returns 5, then \`x = 6\`
        3. \`++x\` → Pre-increment: \`x = 7\`, returns 7
        4. \`7 * 2 = 14\`
        5. Expression: \`5 + 14 - 7\`
        6. Result: \`15\`
        7. \`x--\` → Post-decrement: \`x = 6\`
        `,
        "difficulty": "Hard",
        "category": "Operator Precedence",
        "hasCode": true
    },
    {
        "id": 7,
        "question": `What will be the output of the following Java program?
        \`\`\`java
        class MathTrick {
            public static void main(String[] args) {
                int a = 10, b = 5, c = 2;
                int result = a / b * c + a % b - b++ * --c;
                System.out.println(result + " " + b + " " + c);
            }
        }
        \`\`\``,
        "options": [
            { "text": "1 6 1", "isCorrect": true },
            { "text": "2 6 1", "isCorrect": false },
            { "text": "0 5 2", "isCorrect": false },
            { "text": "Compilation Error", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. \`a = 10\`, \`b = 5\`, \`c = 2\`
        2. \`a / b = 10 / 5 = 2\`
        3. \`2 * c = 2 * 2 = 4\`
        4. \`a % b = 10 % 5 = 0\`
        5. \`b++ * --c = 5 * 1 = 5\`, \`b = 6\`, \`c = 1\`
        6. Expression: \`4 + 0 - 5 = 1\`
        `,
        "difficulty": "Hard",
        "category": "Arithmetic Expressions",
        "hasCode": true
    },
    {
        "id": 8,
        "question": `What will be the output of the following Java code?
        \`\`\`java
        class FinalTest {
            final int a = 10;
            public static void main(String[] args) {
                FinalTest obj = new FinalTest();
                obj.a = 20;
                System.out.println(obj.a);
            }
        }
        \`\`\``,
        "options": [
            { "text": "10", "isCorrect": false },
            { "text": "20", "isCorrect": false },
            { "text": "Compilation Error", "isCorrect": true },
            { "text": "Runtime Error", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. \`final int a = 10\` means \`a\` cannot be modified.
        2. Trying to assign \`a = 20\` causes a **compilation error**.
        `,
        "difficulty": "Hard",
        "category": "Final Keyword",
        "hasCode": true
    },
    {
        "id": 9,
        "question": `What will be the output of the following Java program?
        \`\`\`java
        class Test {
            static int x = 3;
            public static void main(String[] args) {
                x += x++ + ++x;
                System.out.println(x);
            }
        }
        \`\`\``,
        "options": [
            { "text": "9", "isCorrect": false },
            { "text": "11", "isCorrect": false },
            { "text": "10", "isCorrect": true },
            { "text": "Compilation Error", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. \`x = 3\`
        2. \`x++\` → Returns \`3\`, then \`x = 4\`
        3. \`++x\` → \`x = 5\`, returns \`5\`
        4. \`x += 3 + 5\` → \`x = 3 + 8 = 10\`
        `,
        "difficulty": "Hard",
        "category": "Operator Precedence",
        "hasCode": true
    },
    {
        "id": 10,
        "question": `What will be the output of the following Java code?
        \`\`\`java
        class Test {
            static int x = 7;
            public static void main(String[] args) {
                int y = x-- - --x + x++ + ++x;
                System.out.println(y + " " + x);
            }
        }
        \`\`\``,
        "options": [
            { "text": "7 7", "isCorrect": false },
            { "text": "6 7", "isCorrect": false },
            { "text": "5 7", "isCorrect": true },
            { "text": "Compilation Error", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. \`x = 7\`
        2. \`x--\` → Returns \`7\`, then \`x = 6\`
        3. \`--x\` → \`x = 5\`, returns \`5\`
        4. \`x++\` → Returns \`5\`, then \`x = 6\`
        5. \`++x\` → \`x = 7\`, returns \`7\`
        6. Expression: \`7 - 5 + 5 + 7 = 5\`
        `,
        "difficulty": "Hard",
        "category": "Operator Precedence",
        "hasCode": true
    },
    {
        "id": 11,
        "question": `A hospital charges a base fee of $500 per day for a patient's stay. Additionally:
        - Each test costs $200.
        - Medication cost is calculated as $50 per dose.
        - If a patient stays more than 5 days, they receive a 10% discount on the total bill.
        What will be the final bill for a patient who stays 6 days, undergoes 3 tests, and takes 5 doses of medication?
    
        \`\`\`java
        class HospitalBill {
            public static void main(String[] args) {
                int days = 6;
                int tests = 3;
                int doses = 5;
    
                double baseCost = days * 500;
                double testCost = tests * 200;
                double medCost = doses * 50;
                double total = baseCost + testCost + medCost;
    
                if (days > 5) {
                    total *= 0.90; // 10% discount
                }
    
                System.out.println(total);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$3500", "isCorrect": false },
            { "text": "$3420", "isCorrect": false },
            { "text": "$3330", "isCorrect": true },
            { "text": "$3600", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base cost calculation:**
           - \`days = 6\`
           - \`baseCost = 6 * 500 = 3000\`
        
        2. **Test cost calculation:**
           - \`tests = 3\`
           - \`testCost = 3 * 200 = 600\`
        
        3. **Medication cost calculation:**
           - \`doses = 5\`
           - \`medCost = 5 * 50 = 250\`
        
        4. **Total before discount:**
           - \`total = 3000 + 600 + 250 = 3850\`
        
        5. **Applying discount (10%) because stay > 5 days:**
           - \`total = 3850 * 0.90 = 3330\`
        
        6. **Final Output:**
           - **\`3330\`**
        `,
        "difficulty": "Hard",
        "category": "Real-World Calculations",
        "hasCode": true
    },
    {
        "id": 12,
        "question": `A mobile store applies a 12% tax on the base price of phones. Additionally:
        - A discount of 5% is applied if the price is above $1000.
        - What will be the final price of a phone priced at $1200 before tax?
        
        \`\`\`java
        class MobileStore {
            public static void main(String[] args) {
                double basePrice = 1200;
                double tax = basePrice * 0.12;
                double priceAfterTax = basePrice + tax;
    
                if (basePrice > 1000) {
                    priceAfterTax *= 0.95; // 5% discount
                }
    
                System.out.println(priceAfterTax);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$1344", "isCorrect": false },
            { "text": "$1296", "isCorrect": true },
            { "text": "$1320", "isCorrect": false },
            { "text": "$1260", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base price:** \`1200\`
        
        2. **Tax calculation (12% of base price):**
           - \`tax = 1200 * 0.12 = 144\`
           - \`priceAfterTax = 1200 + 144 = 1344\`
        
        3. **Discount check:**
           - Since base price is above \`1000\`, a 5% discount applies.
           - \`discount = 1344 * 0.05 = 67.2\`
        
        4. **Final price after discount:**
           - \`1344 - 67.2 = 1296\`
        
        5. **Final Output:**
           - **\`1296\`**
        `,
        "difficulty": "Hard",
        "category": "Tax & Discount Calculation",
        "hasCode": true
    },
    {
        "id": 13,
        "question": `A shopping mall has a billing system where:
        - A customer gets a 10% discount if the bill is above $500.
        - If they use a membership card, an additional 5% discount is applied.
        - A customer spends $600 and uses a membership card. What will be the final bill amount?
        
        \`\`\`java
        class MallBill {
            public static void main(String[] args) {
                double bill = 600;
                boolean hasMembership = true;
    
                if (bill > 500) {
                    bill *= 0.90; // 10% discount
                }
    
                if (hasMembership) {
                    bill *= 0.95; // Additional 5% discount
                }
    
                System.out.println(bill);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$510", "isCorrect": false },
            { "text": "$513", "isCorrect": true },
            { "text": "$540", "isCorrect": false },
            { "text": "$570", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Initial bill amount:** \`600\`
        
        2. **Applying first discount (10% for bills > $500):**
           - \`600 * 0.90 = 540\`
        
        3. **Checking for membership discount:**
           - Since the customer has a membership card, apply 5% discount.
           - \`540 * 0.95 = 513\`
        
        4. **Final Output:**
           - **\`513\`**
        `,
        "difficulty": "Hard",
        "category": "Billing System",
        "hasCode": true
    },
    {
        "id": 14,
        "question": `A bank offers an annual interest rate of 6% for deposits above $5000, otherwise, it provides 4% interest. Calculate the final amount after 2 years for a deposit of $7000.
    
        \`\`\`java
        class BankInterest {
            static double calculateInterest(double amount, int years) {
                double rate = (amount > 5000) ? 0.06 : 0.04;
                return amount * Math.pow(1 + rate, years);
            }
    
            public static void main(String[] args) {
                double deposit = 7000;
                int years = 2;
                double finalAmount = calculateInterest(deposit, years);
                System.out.println(finalAmount);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$7852.00", "isCorrect": false },
            { "text": "$7868.00", "isCorrect": true },
            { "text": "$7700.00", "isCorrect": false },
            { "text": "$7800.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Deposit Amount:** $7000
        2. **Interest Rate:** Since deposit > 5000, rate = 6% (0.06)
        3. **Formula:** \`A = P(1 + r)^t\`
           - \`A = 7000 * (1.06)^2\`
        4. **Calculation:**
           - \`7000 * 1.1236 = 7868.00\`
        5. **Final Output:** \`7868.00\`
        `,
        "difficulty": "Hard",
        "category": "Banking & Interest",
        "hasCode": true
    },
    {
        "id": 15,
        "question": `An employee's salary consists of:
        - Base salary of $3000.
        - Bonus of 5% if experience > 5 years.
        - Tax of 10% applied on total salary.
        Calculate final salary for an employee with 6 years of experience.
    
        \`\`\`java
        class SalaryCalculator {
            static double calculateSalary(int experience) {
                double baseSalary = 3000;
                double bonus = (experience > 5) ? baseSalary * 0.05 : 0;
                double totalSalary = baseSalary + bonus;
                double tax = totalSalary * 0.10;
                return totalSalary - tax;
            }
    
            public static void main(String[] args) {
                int experience = 6;
                System.out.println(calculateSalary(experience));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$3150", "isCorrect": false },
            { "text": "$2970", "isCorrect": true },
            { "text": "$3000", "isCorrect": false },
            { "text": "$3200", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Base Salary:** $3000
        2. **Bonus Calculation:**
           - Since experience > 5 years, bonus = 5% of 3000 = $150
        3. **Total Salary Before Tax:** $3000 + $150 = $3150
        4. **Tax Calculation:** 10% of 3150 = $315
        5. **Final Salary:** 3150 - 315 = **$2970**
        `,
        "difficulty": "Hard",
        "category": "Salary Calculation",
        "hasCode": true
    },
    {
        "id": 16,
        "question": `A power company charges electricity bills as follows:
        - $0.15 per unit for usage ≤ 100 units.
        - $0.20 per unit for usage between 101-300 units.
        - $0.25 per unit for usage above 300 units.
        Calculate bill for 250 units.
    
        \`\`\`java
        class ElectricityBill {
            static double calculateBill(int units) {
                if (units <= 100) return units * 0.15;
                else if (units <= 300) return 100 * 0.15 + (units - 100) * 0.20;
                else return 100 * 0.15 + 200 * 0.20 + (units - 300) * 0.25;
            }
    
            public static void main(String[] args) {
                int units = 250;
                System.out.println(calculateBill(units));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$40.00", "isCorrect": false },
            { "text": "$47.50", "isCorrect": true },
            { "text": "$50.00", "isCorrect": false },
            { "text": "$55.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **First 100 units:** $0.15 per unit → $15
        2. **Next 150 units:** $0.20 per unit → $30
        3. **Total Bill:** $15 + $30 = **$47.50**
        `,
        "difficulty": "Hard",
        "category": "Electricity Billing",
        "hasCode": true
    },
    {
        "id": 17,
        "question": `A car rental service charges a base fee of $50 per day. Additional charges:
        - If rental days > 5, apply a 10% discount.
        - Insurance costs $15 per day.
        - Calculate total bill for 7 days with insurance.
    
        \`\`\`java
        class CarRental {
            static double calculateRental(int days, boolean insurance) {
                double baseCost = days * 50;
                double insuranceCost = insurance ? days * 15 : 0;
                double total = baseCost + insuranceCost;
    
                if (days > 5) {
                    total *= 0.90; // 10% discount
                }
                return total;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateRental(7, true));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$472.50", "isCorrect": true },
            { "text": "$500", "isCorrect": false },
            { "text": "$455", "isCorrect": false },
            { "text": "$525", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base cost calculation:** $50 per day → \`7 * 50 = 350\`
        2. **Insurance calculation:** $15 per day → \`7 * 15 = 105\`
        3. **Total before discount:** \`350 + 105 = 455\`
        4. **Applying discount (10% for >5 days):** \`455 * 0.90 = 472.50\`
        5. **Final Output:** \`472.50\`
        `,
        "difficulty": "Hard",
        "category": "Car Rental Calculation",
        "hasCode": true
    },
    {
        "id": 18,
        "question": `A mobile service provider offers:
        - $30 base fee.
        - $0.10 per call.
        - If calls > 100, an additional 10% discount is applied.
        - Calculate the final bill for 120 calls.
    
        \`\`\`java
        class MobileBill {
            static double calculateBill(int calls) {
                double total = 30 + calls * 0.10;
                if (calls > 100) {
                    total *= 0.90;
                }
                return total;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(120));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$38.70", "isCorrect": true },
            { "text": "$39.00", "isCorrect": false },
            { "text": "$42.00", "isCorrect": false },
            { "text": "$37.50", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base fee:** $30
        2. **Call charge calculation:** 120 calls → \`120 * 0.10 = 12\`
        3. **Total before discount:** \`30 + 12 = 42\`
        4. **Discount (10% for calls >100):** \`42 * 0.90 = 38.70\`
        5. **Final Output:** \`38.70\`
        `,
        "difficulty": "Hard",
        "category": "Mobile Bill Calculation",
        "hasCode": true
    },
    {
        "id": 19,
        "question": `A loan system calculates monthly EMI based on:
        - Principal: $5000
        - Interest Rate: 5% per year.
        - Tenure: 12 months.
        - Formula: EMI = (P × r × (1 + r)^n) / ((1 + r)^n - 1).
        - Compute EMI.
    
        \`\`\`java
        class LoanEMI {
            static double calculateEMI(double principal, double rate, int months) {
                rate = rate / (12 * 100); // Convert annual rate to monthly
                double emi = (principal * rate * Math.pow(1 + rate, months)) / 
                             (Math.pow(1 + rate, months) - 1);
                return emi;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateEMI(5000, 5, 12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$427.50", "isCorrect": false },
            { "text": "$428.04", "isCorrect": true },
            { "text": "$430.00", "isCorrect": false },
            { "text": "$420.50", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Convert annual interest to monthly rate:** \`5 / 12 / 100 = 0.004167\`
        2. **Formula Calculation:**
           - **Numerator:** \`5000 × 0.004167 × (1.004167)^12\`
           - **Denominator:** \`(1.004167)^12 - 1\`
        3. **Final EMI Calculation:** \`428.04\`
        4. **Final Output:** \`428.04\`
        `,
        "difficulty": "Hard",
        "category": "Loan EMI Calculation",
        "hasCode": true
    },
    {
        "id": 20,
        "question": `A shopping mall has a membership system:
        - Regular discount: 10%.
        - Extra 5% for premium members.
        - Calculate final bill for a premium member spending $700.
    
        \`\`\`java
        class ShoppingMall {
            static double calculateBill(double bill, boolean isPremium) {
                bill *= 0.90; // 10% discount
                if (isPremium) {
                    bill *= 0.95; // Additional 5% discount
                }
                return bill;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(700, true));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$598.50", "isCorrect": true },
            { "text": "$630.00", "isCorrect": false },
            { "text": "$665.00", "isCorrect": false },
            { "text": "$700.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Regular discount:** \`700 * 0.90 = 630\`
        2. **Premium discount:** \`630 * 0.95 = 598.50\`
        3. **Final Output:** \`598.50\`
        `,
        "difficulty": "Hard",
        "category": "Shopping Mall Discounts",
        "hasCode": true
    },
    {
        "id": 21,
        "question": `A car showroom offers a financing scheme:
        - Base price: $25,000
        - Interest: 7% per year
        - Loan term: 3 years
        - Down payment: 10% of base price
        - Monthly EMI = (P × r × (1 + r)^n) / ((1 + r)^n - 1)
        - Compute monthly EMI.
        
        \`\`\`java
        class CarFinance {
            static double calculateEMI(double basePrice, double rate, int years) {
                double downPayment = basePrice * 0.10;
                double principal = basePrice - downPayment;
                rate = rate / (12 * 100);
                int months = years * 12;
                double emi = (principal * rate * Math.pow(1 + rate, months)) /
                             (Math.pow(1 + rate, months) - 1);
                return emi;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateEMI(25000, 7, 3));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$695.20", "isCorrect": true },
            { "text": "$705.50", "isCorrect": false },
            { "text": "$720.00", "isCorrect": false },
            { "text": "$680.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Calculate Down Payment:** \`25000 * 0.10 = 2500\`
        2. **Loan Amount:** \`25000 - 2500 = 22500\`
        3. **Convert Interest Rate:** \`7% per year → 0.07 / 12 = 0.005833\`
        4. **Number of Months:** \`3 * 12 = 36\`
        5. **Apply EMI Formula:** 
           - **Numerator:** \`22500 × 0.005833 × (1.005833)^36\`
           - **Denominator:** \`(1.005833)^36 - 1\`
        6. **Final EMI Calculation:** \`$695.20\`
        7. **Final Output:** \`695.20\`
        `,
        "difficulty": "Hard",
        "category": "Car Financing",
        "hasCode": true
    },
    {
        "id": 22,
        "question": `A warehouse tracks inventory and updates quantities based on sales.
        - Initial quantity: 150
        - Each sale decreases stock by 1.
        - If stock drops below 10, restock 50 units.
        - Compute stock after 147 sales.
        
        \`\`\`java
        class Warehouse {
            int stock = 150;
    
            void sellItem() {
                stock--;
                if (stock < 10) {
                    stock += 50;
                }
            }
    
            public static void main(String[] args) {
                Warehouse wh = new Warehouse();
                for (int i = 0; i < 147; i++) {
                    wh.sellItem();
                }
                System.out.println(wh.stock);
            }
        }
        \`\`\``,
        "options": [
            { "text": "53", "isCorrect": true },
            { "text": "3", "isCorrect": false },
            { "text": "50", "isCorrect": false },
            { "text": "10", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Initial Stock:** 150
        2. **After 140 Sales:** \`150 - 140 = 10\`
        3. **Selling 141st Item:** \`10 - 1 = 9\` → **Restock 50** → **Stock = 59**
        4. **Sales Continue:** \`59 - 6 = 53\`
        5. **Final Stock:** **53**
        `,
        "difficulty": "Hard",
        "category": "Inventory Management",
        "hasCode": true
    },
    {
        "id": 23,
        "question": `A mobile plan offers:
        - Base price: $40
        - $0.20 per SMS
        - Free calls up to 100 minutes, after that $0.30 per minute
        - Compute the final bill for 120 minutes & 30 SMS.
        
        \`\`\`java
        class MobilePlan {
            static double calculateBill(int minutes, int sms) {
                double bill = 40;
                if (minutes > 100) {
                    bill += (minutes - 100) * 0.30;
                }
                bill += sms * 0.20;
                return bill;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(120, 30));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$49", "isCorrect": true },
            { "text": "$50", "isCorrect": false },
            { "text": "$45", "isCorrect": false },
            { "text": "$55", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Base price:** \`$40\`
        2. **Extra Call Charges:** \`(120 - 100) * 0.30 = 6\`
        3. **SMS Charges:** \`30 * 0.20 = 6\`
        4. **Total Bill:** \`40 + 6 + 3 = 49\`
        5. **Final Output:** \`49\`
        `,
        "difficulty": "Hard",
        "category": "Mobile Billing",
        "hasCode": true
    },
    {
        "id": 24,
        "question": `A bakery produces cakes and tracks sales:
        - Each cake costs $15 to make.
        - Sold for $25.
        - If 50 cakes are made and 30 are sold, calculate profit.
        
        \`\`\`java
        class Bakery {
            static double calculateProfit(int made, int sold) {
                double cost = made * 15;
                double revenue = sold * 25;
                return revenue - cost;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateProfit(50, 30));
            }
        }
        \`\`\``,
        "options": [
            { "text": "-$300", "isCorrect": true },
            { "text": "$500", "isCorrect": false },
            { "text": "$750", "isCorrect": false },
            { "text": "$200", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Cost Calculation:** \`50 * 15 = 750\`
        2. **Revenue Calculation:** \`30 * 25 = 750\`
        3. **Profit Calculation:** \`750 - 750 = -300\`
        4. **Final Output:** \`-300\`
        `,
        "difficulty": "Hard",
        "category": "Business Profit Calculation",
        "hasCode": true
    },
    {
        "id": 25,
        "question": `A bank offers a recurring deposit scheme:
        - Monthly deposit: $500
        - Interest rate: 5% per annum
        - Tenure: 12 months
        - Interest formula: A = P × (1 + r/n)^(n*t)
        - Compute the maturity amount.
        
        \`\`\`java
        class RecurringDeposit {
            static double calculateMaturity(double monthlyDeposit, double rate, int months) {
                rate = rate / (12 * 100);
                double total = 0;
                for (int i = 0; i < months; i++) {
                    total += monthlyDeposit * Math.pow(1 + rate, months - i);
                }
                return total;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateMaturity(500, 5, 12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$6183.30", "isCorrect": true },
            { "text": "$6100.50", "isCorrect": false },
            { "text": "$6000.00", "isCorrect": false },
            { "text": "$6250.75", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Interest Rate Conversion:** \`5% per year → 0.05/12 = 0.004167\`
        2. **Iterate for each deposit:** 
           - Month 1: \`500 × (1.004167)^12\`
           - Month 2: \`500 × (1.004167)^11\`
           - ...
           - Month 12: \`500 × (1.004167)^1\`
        3. **Summing all values gives the final maturity amount** \`$6183.30\`
        `,
        "difficulty": "Hard",
        "category": "Banking & Investments",
        "hasCode": true
    },
    {
        "id": 26,
        "question": `A telecom provider offers:
        - Monthly base fee: $30
        - Data charges: $10 per GB
        - Calls: Free for first 500 minutes, then $0.05 per minute.
        - Compute bill for 650 minutes & 5GB data.
        
        \`\`\`java
        class TelecomBill {
            static double calculateBill(int minutes, int gb) {
                double bill = 30 + gb * 10;
                if (minutes > 500) {
                    bill += (minutes - 500) * 0.05;
                }
                return bill;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(650, 5));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$85", "isCorrect": true },
            { "text": "$90", "isCorrect": false },
            { "text": "$82.50", "isCorrect": false },
            { "text": "$95", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Charge:** \`$30\`
        2. **Data Charges:** \`5GB * 10 = $50\`
        3. **Call Charges:** \`(650 - 500) * 0.05 = 7.50\`
        4. **Total Bill:** \`30 + 50 + 7.50 = 85\`
        5. **Final Output:** \`85\`
        `,
        "difficulty": "Hard",
        "category": "Telecom Billing",
        "hasCode": true
    },
    {
        "id": 27,
        "question": `A gym offers membership plans:
        - Monthly fee: $40
        - Discount: 10% for annual membership
        - Special: If total bill > $400, an extra 5% discount.
        - Compute the final bill for an annual member.
        
        \`\`\`java
        class GymMembership {
            static double calculateFee(int months) {
                double fee = months * 40;
                if (months == 12) {
                    fee *= 0.90;
                }
                if (fee > 400) {
                    fee *= 0.95;
                }
                return fee;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateFee(12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$410.40", "isCorrect": true },
            { "text": "$432.00", "isCorrect": false },
            { "text": "$384.00", "isCorrect": false },
            { "text": "$450.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Fee:** \`12 * 40 = 480\`
        2. **Annual Discount (10%):** \`480 * 0.90 = 432\`
        3. **Additional Discount (5% for bills > 400):** \`432 * 0.95 = 410.40\`
        4. **Final Output:** \`410.40\`
        `,
        "difficulty": "Hard",
        "category": "Membership Plans",
        "hasCode": true
    },
    {
        "id": 28,
        "question": `A furniture store calculates the total cost of furniture pieces.
        - Base price varies per item.
        - Additional assembly fee: $50 if the item is not pre-assembled.
        - Discount of 5% applies for orders above $1000.
        - Compute total cost for 3 chairs ($200 each, pre-assembled) and 2 tables ($400 each, not pre-assembled).
        
        \`\`\`java
        class Furniture {
            double price;
            boolean isAssembled;
        
            Furniture(double price, boolean isAssembled) {
                this.price = price;
                this.isAssembled = isAssembled;
            }
        
            double getTotalCost() {
                return price + (isAssembled ? 0 : 50);
            }
        }
        
        public class Store {
            public static void main(String[] args) {
                Furniture chair1 = new Furniture(200, true);
                Furniture chair2 = new Furniture(200, true);
                Furniture chair3 = new Furniture(200, true);
                Furniture table1 = new Furniture(400, false);
                Furniture table2 = new Furniture(400, false);
        
                double total = chair1.getTotalCost() + chair2.getTotalCost() + chair3.getTotalCost() +
                               table1.getTotalCost() + table2.getTotalCost();
        
                if (total > 1000) total *= 0.95;
        
                System.out.println(total);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$1350", "isCorrect": false },
            { "text": "$1235", "isCorrect": true },
            { "text": "$1250", "isCorrect": false },
            { "text": "$1400", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Chair Costs:** $200 each (pre-assembled) → \`200 * 3 = 600\`
        2. **Table Costs:** $400 each (not pre-assembled) + $50 assembly fee → \`(400+50) * 2 = 900\`
        3. **Total Before Discount:** \`600 + 900 = 1500\`
        4. **Applying 5% Discount:** \`1500 * 0.95 = 1235\`
        5. **Final Output:** \`1235\`
        `,
        "difficulty": "Hard",
        "category": "Object-Oriented Calculation",
        "hasCode": true
    },
    {
        "id": 29,
        "question": `An airline company offers:
        - Base ticket price: $200
        - Additional luggage fee: $30 per extra kg above 10kg
        - First-class passengers get a 10% discount on total.
        - Compute total price for a passenger in first-class carrying 15kg luggage.
        
        \`\`\`java
        class Ticket {
            double basePrice;
            int extraLuggage;
            boolean isFirstClass;
        
            Ticket(double basePrice, int luggage, boolean isFirstClass) {
                this.basePrice = basePrice;
                this.extraLuggage = Math.max(0, luggage - 10);
                this.isFirstClass = isFirstClass;
            }
        
            double computeTotal() {
                double total = basePrice + extraLuggage * 30;
                if (isFirstClass) total *= 0.90;
                return total;
            }
        }
        
        public class Airline {
            public static void main(String[] args) {
                Ticket passenger = new Ticket(200, 15, true);
                System.out.println(passenger.computeTotal());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$275", "isCorrect": true },
            { "text": "$300", "isCorrect": false },
            { "text": "$250", "isCorrect": false },
            { "text": "$290", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Price:** \`$200\`
        2. **Extra Luggage Fee:** \`(15 - 10) * 30 = 150\`
        3. **Total Before Discount:** \`200 + 150 = 350\`
        4. **Applying First-Class Discount (10% off):** \`350 * 0.90 = 275\`
        5. **Final Output:** \`275\`
        `,
        "difficulty": "Hard",
        "category": "Airline Ticket Calculation",
        "hasCode": true
    },
    {
        "id": 30,
        "question": `A company manages employee salaries with:
        - Base Salary: $5000
        - Bonus: 10% for employees with 5+ years of experience.
        - Tax deduction: 15% on total salary.
        - Compute final salary for an employee with 6 years of experience.
        
        \`\`\`java
        class Employee {
            double baseSalary;
            int experience;
        
            Employee(double baseSalary, int experience) {
                this.baseSalary = baseSalary;
                this.experience = experience;
            }
        
            double calculateSalary() {
                double bonus = (experience >= 5) ? baseSalary * 0.10 : 0;
                double total = baseSalary + bonus;
                total *= 0.85; // 15% tax deduction
                return total;
            }
        }
        
        public class Company {
            public static void main(String[] args) {
                Employee emp = new Employee(5000, 6);
                System.out.println(emp.calculateSalary());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$4675", "isCorrect": true },
            { "text": "$4500", "isCorrect": false },
            { "text": "$5000", "isCorrect": false },
            { "text": "$4750", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Salary:** \`$5000\`
        2. **Bonus Calculation (10% for 5+ years):** \`5000 * 0.10 = 500\`
        3. **Total Before Tax:** \`5000 + 500 = 5500\`
        4. **Tax Deduction (15%):** \`5500 * 0.85 = 4675\`
        5. **Final Output:** \`4675\`
        `,
        "difficulty": "Hard",
        "category": "Salary Calculation",
        "hasCode": true
    },
    {
        "id": 31,
        "question": `A hotel calculates the total bill based on:
        - Room charge: $100 per night
        - Food charge: $25 per meal
        - Service tax: 12% on total bill
        - A discount of 10% if the total exceeds $500
        - Compute the final bill for a stay of 5 nights with 12 meals.
        
        \`\`\`java
        class HotelBill {
            static double calculateBill(int nights, int meals) {
                double roomCost = nights * 100;
                double foodCost = meals * 25;
                double total = roomCost + foodCost;
                total *= 1.12; // 12% service tax
                if (total > 500) {
                    total *= 0.90; // 10% discount
                }
                return total;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(5, 12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$508.32", "isCorrect": true },
            { "text": "$520.00", "isCorrect": false },
            { "text": "$550.00", "isCorrect": false },
            { "text": "$490.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Room Cost:** 5 nights × $100 = $500
        2. **Food Cost:** 12 meals × $25 = $300
        3. **Subtotal:** $500 + $300 = $800
        4. **Adding 12% service tax:** $800 × 1.12 = $896
        5. **Applying 10% discount:** $896 × 0.90 = **$508.32**
        `,
        "difficulty": "Hard",
        "category": "Hotel Billing System",
        "hasCode": true
    },
    {
        "id": 32,
        "question": `A retail store calculates final billing:
        - Price per item: $20
        - Bulk discount: 5% for purchases over 20 items
        - Tax: 10% on total
        - Compute the final bill for purchasing 25 items.
        
        \`\`\`java
        class RetailStore {
            static double calculateBill(int quantity) {
                double cost = quantity * 20;
                if (quantity > 20) {
                    cost *= 0.95; // 5% bulk discount
                }
                cost *= 1.10; // 10% tax
                return cost;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(25));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$522.50", "isCorrect": true },
            { "text": "$500.00", "isCorrect": false },
            { "text": "$540.00", "isCorrect": false },
            { "text": "$550.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Cost Before Discount:** 25 × $20 = $500
        2. **Applying 5% Bulk Discount:** $500 × 0.95 = $475
        3. **Adding 10% Tax:** $475 × 1.10 = **$522.50**
        `,
        "difficulty": "Hard",
        "category": "Retail Billing System",
        "hasCode": true
    },
    {
        "id": 33,
        "question": `An online course provider offers:
        - Base fee: $300
        - Extra material cost: $20 per additional module
        - 15% discount if total fee exceeds $500
        - Compute final cost for a student enrolling in 12 modules.
        
        \`\`\`java
        class CourseFee {
            static double calculateFee(int modules) {
                double cost = 300 + (modules - 5) * 20;
                if (cost > 500) {
                    cost *= 0.85;
                }
                return cost;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateFee(12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$442.00", "isCorrect": true },
            { "text": "$500.00", "isCorrect": false },
            { "text": "$525.00", "isCorrect": false },
            { "text": "$490.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Fee:** $300
        2. **Extra Modules (above 5):** 12 - 5 = 7
        3. **Extra Cost:** 7 × $20 = $140
        4. **Total Before Discount:** $300 + $140 = $440
        5. **Applying 15% Discount:** $440 × 0.85 = **$442.00**
        `,
        "difficulty": "Hard",
        "category": "Education Fees Calculation",
        "hasCode": true
    },
    {
        "id": 34,
        "question": `A ride-sharing company calculates fare:
        - Base fare: $5
        - Per mile charge: $1.50
        - Peak hour surcharge: 20% extra
        - Compute total fare for 12 miles during peak hours.
        
        \`\`\`java
        class RideShare {
            static double calculateFare(int miles, boolean isPeakHour) {
                double cost = 5 + miles * 1.50;
                if (isPeakHour) {
                    cost *= 1.20; // 20% peak surcharge
                }
                return cost;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateFare(12, true));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$21.00", "isCorrect": false },
            { "text": "$21.60", "isCorrect": true },
            { "text": "$20.00", "isCorrect": false },
            { "text": "$22.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Fare:** $5
        2. **Mileage Cost:** 12 × $1.50 = $18
        3. **Total Before Surcharge:** $5 + $18 = $23
        4. **Applying Peak Hour Surcharge:** $23 × 1.20 = **$21.60**
        `,
        "difficulty": "Hard",
        "category": "Ride-Sharing Fare Calculation",
        "hasCode": true
    },
    {
        "id": 35,
        "question": `A flight company calculates ticket costs:
        - Base fare: $200
        - Taxes: 15%
        - Additional fee for extra baggage: $30 per kg over 10kg.
        - A first-class passenger gets a 10% discount on total.
        - Compute ticket price for a passenger with 12kg baggage in first-class.
        
        \`\`\`java
        class Flight {
            static double computeTicketPrice(boolean isFirstClass, int baggageWeight) {
                double baseFare = 200;
                int extraBaggage = Math.max(0, baggageWeight - 10);
                double total = baseFare + (extraBaggage * 30);
                total *= 1.15; // 15% tax
                if (isFirstClass) {
                    total *= 0.90; // 10% discount
                }
                return total;
            }
    
            public static void main(String[] args) {
                System.out.println(computeTicketPrice(true, 12));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$248.40", "isCorrect": true },
            { "text": "$260.00", "isCorrect": false },
            { "text": "$255.00", "isCorrect": false },
            { "text": "$240.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Base Fare:** $200
        2. **Extra baggage charge:** (12 - 10) × 30 = $60
        3. **Subtotal:** $200 + $60 = $260
        4. **Adding 15% Tax:** $260 × 1.15 = $299
        5. **Applying 10% First-Class Discount:** $299 × 0.90 = **$248.40**
        `,
        "difficulty": "Hard",
        "category": "Flight Ticket Calculation",
        "hasCode": true
    },
    {
        "id": 36,
        "question": `A warehouse tracks inventory for multiple products.
        - Each product has a stock count.
        - Sales decrease stock, and if stock < 10, restock by 50.
        - Compute stock for two products after multiple sales.
        
        \`\`\`java
        class Product {
            String name;
            int stock;
        
            Product(String name, int stock) {
                this.name = name;
                this.stock = stock;
            }
        
            void sell(int quantity) {
                stock -= quantity;
                if (stock < 10) {
                    stock += 50; // Restock if stock goes below 10
                }
            }
        }
        
        public class Warehouse {
            public static void main(String[] args) {
                Product product1 = new Product("Laptops", 100);
                Product product2 = new Product("Monitors", 50);
        
                product1.sell(95);
                product2.sell(45);
        
                System.out.println(product1.stock + " " + product2.stock);
            }
        }
        \`\`\``,
        "options": [
            { "text": "55 55", "isCorrect": true },
            { "text": "5 5", "isCorrect": false },
            { "text": "45 45", "isCorrect": false },
            { "text": "60 60", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        **Product 1 (Laptops)**
        - Initial stock: 100
        - Sales: 95 → Remaining: **5**
        - Stock < 10 → Restock **50** → New Stock: **55**
        
        **Product 2 (Monitors)**
        - Initial stock: 50
        - Sales: 45 → Remaining: **5**
        - Stock < 10 → Restock **50** → New Stock: **55**
        
        **Final Output: 55 55**
        `,
        "difficulty": "Hard",
        "category": "Inventory Management",
        "hasCode": true
    },
    {
        "id": 37,
        "question": `A telecom company calculates monthly bills:
        - Base fee: $40
        - $0.15 per call over 100 calls
        - $10 per GB data
        - Compute final bill for 120 calls and 5GB data.
        
        \`\`\`java
        class Telecom {
            static double calculateBill(int calls, int dataGB) {
                double bill = 40;
                if (calls > 100) {
                    bill += (calls - 100) * 0.15;
                }
                bill += dataGB * 10;
                return bill;
            }
    
            public static void main(String[] args) {
                System.out.println(calculateBill(120, 5));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$62", "isCorrect": true },
            { "text": "$65", "isCorrect": false },
            { "text": "$58", "isCorrect": false },
            { "text": "$70", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Base Fee:** $40
        2. **Extra Call Charges:** (120 - 100) × 0.15 = $3
        3. **Data Charges:** 5 × $10 = $50
        4. **Total Bill:** 40 + 3 + 50 = **$62**
        `,
        "difficulty": "Hard",
        "category": "Telecom Billing",
        "hasCode": true
    },
    {
        "id": 38,
        "question": `A company has different salary structures:
        - Base Salary: $4000
        - If department is "IT", 10% extra bonus.
        - If department is "HR", $500 extra.
        - A 12% tax deduction applies to all.
        - Compute final salary for an IT employee.
        
        \`\`\`java
        class Employee {
            static double computeSalary(String department) {
                double base = 4000;
                if (department.equals("IT")) {
                    base *= 1.10;
                } else if (department.equals("HR")) {
                    base += 500;
                }
                return base * 0.88; // 12% tax deduction
            }
    
            public static void main(String[] args) {
                System.out.println(computeSalary("IT"));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$3960", "isCorrect": true },
            { "text": "$4000", "isCorrect": false },
            { "text": "$4200", "isCorrect": false },
            { "text": "$3800", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Base Salary:** $4000
        2. **IT Bonus (10% increase):** $4000 * 1.10 = $4400
        3. **Tax Deduction (12%):** $4400 * 0.88 = **$3960**
        `,
        "difficulty": "Hard",
        "category": "Salary Calculation",
        "hasCode": true
    },
    {
        "id": 39,
        "question": `A shopping cart system calculates final price:
        - Each item has a price and quantity.
        - If total > $500, apply a 10% discount.
        - If a premium member, apply another 5% discount.
        - Compute final price for:
            - 2 Phones ($250 each)
            - 3 Headphones ($50 each)
            - Premium membership enabled
        
        \`\`\`java
        class Item {
            double price;
            int quantity;
    
            Item(double price, int quantity) {
                this.price = price;
                this.quantity = quantity;
            }
    
            double getTotal() {
                return price * quantity;
            }
        }
    
        public class ShoppingCart {
            public static void main(String[] args) {
                Item phone = new Item(250, 2);
                Item headphone = new Item(50, 3);
    
                double total = phone.getTotal() + headphone.getTotal();
                if (total > 500) total *= 0.90;
                boolean isPremium = true;
                if (isPremium) total *= 0.95;
    
                System.out.println(total);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$450", "isCorrect": false },
            { "text": "$465.75", "isCorrect": true },
            { "text": "$470", "isCorrect": false },
            { "text": "$500", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Phones Cost:** 2 * $250 = $500
        2. **Headphones Cost:** 3 * $50 = $150
        3. **Subtotal:** $500 + $150 = $650
        4. **Applying 10% Discount:** $650 * 0.90 = $585
        5. **Premium Discount (5% more):** $585 * 0.95 = **$465.75**
        `,
        "difficulty": "Hard",
        "category": "E-commerce Pricing",
        "hasCode": true
    },
    {
        "id": 39,
        "question": `A shopping cart system calculates final price:
        - Each item has a price and quantity.
        - If total > $500, apply a 10% discount.
        - If a premium member, apply another 5% discount.
        - Compute final price for:
            - 2 Phones ($250 each)
            - 3 Headphones ($50 each)
            - Premium membership enabled
        
        \`\`\`java
        class Item {
            double price;
            int quantity;
    
            Item(double price, int quantity) {
                this.price = price;
                this.quantity = quantity;
            }
    
            double getTotal() {
                return price * quantity;
            }
        }
    
        public class ShoppingCart {
            public static void main(String[] args) {
                Item phone = new Item(250, 2);
                Item headphone = new Item(50, 3);
    
                double total = phone.getTotal() + headphone.getTotal();
                if (total > 500) total *= 0.90;
                boolean isPremium = true;
                if (isPremium) total *= 0.95;
    
                System.out.println(total);
            }
        }
        \`\`\``,
        "options": [
            { "text": "$450", "isCorrect": false },
            { "text": "$465.75", "isCorrect": true },
            { "text": "$470", "isCorrect": false },
            { "text": "$500", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Phones Cost:** 2 * $250 = $500
        2. **Headphones Cost:** 3 * $50 = $150
        3. **Subtotal:** $500 + $150 = $650
        4. **Applying 10% Discount:** $650 * 0.90 = $585
        5. **Premium Discount (5% more):** $585 * 0.95 = **$465.75**
        `,
        "difficulty": "Hard",
        "category": "E-commerce Pricing",
        "hasCode": true
    },
    {
        "id": 40,
        "question": `A bank offers loans with:
        - Base interest rate: 5% annually
        - If loan > $10,000, apply 0.5% extra
        - Compute EMI for a $12,000 loan over 24 months.
        
        \`\`\`java
        class Loan {
            static double computeEMI(double amount, int months) {
                double rate = 5;
                if (amount > 10000) rate += 0.5;
                rate /= (12 * 100);
                return (amount * rate * Math.pow(1 + rate, months)) / 
                       (Math.pow(1 + rate, months) - 1);
            }
    
            public static void main(String[] args) {
                System.out.println(computeEMI(12000, 24));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$527.50", "isCorrect": false },
            { "text": "$529.80", "isCorrect": true },
            { "text": "$500.00", "isCorrect": false },
            { "text": "$515.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Loan Amount:** $12,000
        2. **Interest Rate Adjustment:** Since loan > $10,000 → 5.5%
        3. **Convert to Monthly Rate:** 5.5% / 12 = 0.004583
        4. **Apply EMI Formula:** (A × r × (1+r)^n) / ((1+r)^n - 1)
        5. **Final EMI:** **$529.80**
        `,
        "difficulty": "Hard",
        "category": "Loan EMI",
        "hasCode": true
    },
    {
        "id": 41,
        "question": `An insurance company calculates premium as follows:
        - Base premium: $500
        - Age factor: If age > 50, add 20% extra.
        - If the person is a smoker, add another 15%.
        - If they have a health condition, add 10%.
        - Calculate the final premium for a 55-year-old smoker with a health condition.
        
        \`\`\`java
        class Insurance {
            static double computePremium(int age, boolean isSmoker, boolean hasCondition) {
                double premium = 500;
                if (age > 50) premium *= 1.20;
                if (isSmoker) premium *= 1.15;
                if (hasCondition) premium *= 1.10;
                return premium;
            }
    
            public static void main(String[] args) {
                System.out.println(computePremium(55, true, true));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$759.00", "isCorrect": true },
            { "text": "$750.00", "isCorrect": false },
            { "text": "$780.00", "isCorrect": false },
            { "text": "$800.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Base Premium:** $500
        2. **Age Factor (20% increase for age > 50):** $500 * 1.20 = $600
        3. **Smoker Factor (15% increase):** $600 * 1.15 = $690
        4. **Health Condition (10% increase):** $690 * 1.10 = **$759**
        `,
        "difficulty": "Hard",
        "category": "Insurance Premium Calculation",
        "hasCode": true
    },
    {
        "id": 42,
        "question": `A banking system tracks transactions and account details.
        - Accounts have an initial balance.
        - Deposit increases balance.
        - Withdraw decreases balance but must not exceed available funds.
        - Interest is added monthly.
        - Compute the final balance after a deposit of $500, withdrawal of $300, and monthly interest of 5%.
    
        \`\`\`java
        interface Account {
            void deposit(double amount);
            void withdraw(double amount);
            void addInterest();
            double getBalance();
        }
    
        class SavingsAccount implements Account {
            private double balance;
    
            SavingsAccount(double balance) {
                this.balance = balance;
            }
    
            public void deposit(double amount) {
                balance += amount;
            }
    
            public void withdraw(double amount) {
                if (balance >= amount) {
                    balance -= amount;
                }
            }
    
            public void addInterest() {
                balance *= 1.05;
            }
    
            public double getBalance() {
                return balance;
            }
        }
    
        public class Bank {
            public static void main(String[] args) {
                Account acc = new SavingsAccount(1000);
                acc.deposit(500);
                acc.withdraw(300);
                acc.addInterest();
                System.out.println(acc.getBalance());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$1260", "isCorrect": false },
            { "text": "$1265", "isCorrect": false },
            { "text": "$1260.00", "isCorrect": true },
            { "text": "$1270.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Initial Balance:** $1000
        2. **Deposit $500:** New Balance = $1500
        3. **Withdraw $300:** New Balance = $1200
        4. **Apply Interest (5%):** $1200 * 1.05 = **$1260**
        `,
        "difficulty": "Very Hard",
        "category": "Interfaces & Transactions",
        "hasCode": true
    },
    {
        "id": 43,
        "question": `A warehouse system tracks inventory for multiple products.
        - Each product has a stock quantity.
        - A sale decreases stock.
        - If stock falls below 10, restock 50 units.
        - Compute final stock after multiple sales.
    
        \`\`\`java
        class Warehouse {
            static int totalStock;
            int stock;
    
            static {
                totalStock = 1000;
            }
    
            Warehouse(int stock) {
                this.stock = stock;
            }
    
            void sell(int quantity) {
                stock -= quantity;
                if (stock < 10) {
                    stock += 50;
                }
                totalStock -= quantity;
            }
    
            static void showTotalStock() {
                System.out.println(totalStock);
            }
        }
    
        public class Inventory {
            public static void main(String[] args) {
                Warehouse w1 = new Warehouse(50);
                Warehouse w2 = new Warehouse(80);
                w1.sell(45);
                w2.sell(75);
                w1.sell(5);
                w2.sell(10);
                Warehouse.showTotalStock();
                System.out.println(w1.stock + " " + w2.stock);
            }
        }
        \`\`\``,
        "options": [
            { "text": "865 50 50", "isCorrect": true },
            { "text": "880 55 55", "isCorrect": false },
            { "text": "900 40 40", "isCorrect": false },
            { "text": "850 60 60", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Static Block:** Initializes total stock as 1000.
        2. **Two objects created:** w1 (50 stock), w2 (80 stock).
        3. **w1 sells 45:** Remaining = 5 → Restocks to **55**.
        4. **w2 sells 75:** Remaining = 5 → Restocks to **55**.
        5. **w1 sells 5:** Remaining = **50**.
        6. **w2 sells 10:** Remaining = **50**.
        7. **Total Stock Calculation:** 1000 - (45 + 75 + 5 + 10) = **865**.
        `,
        "difficulty": "Very Hard",
        "category": "Static Blocks & Inventory",
        "hasCode": true
    },
    {
        "id": 44,
        "question": `A ride-sharing company handles fare calculation dynamically:
        - Base fare: $5
        - Per-mile charge: $1.50
        - Peak-hour surcharge: 20% extra
        - Compute the total fare for 12 miles during peak hours.
    
        \`\`\`java
        class Ride {
            double fare;
    
            Ride() {
                fare = 5;
            }
    
            Ride(int miles) {
                this();
                fare += miles * 1.50;
            }
    
            Ride(int miles, boolean peakHour) {
                this(miles);
                if (peakHour) {
                    fare *= 1.20;
                }
            }
    
            void showFare() {
                System.out.println(fare);
            }
        }
    
        public class RideShare {
            public static void main(String[] args) {
                Ride r = new Ride(12, true);
                r.showFare();
            }
        }
        \`\`\``,
        "options": [
            { "text": "$21.60", "isCorrect": true },
            { "text": "$20.00", "isCorrect": false },
            { "text": "$23.00", "isCorrect": false },
            { "text": "$22.50", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Constructor Chaining:**
           - Default constructor sets \`fare = 5\`.
           - Second constructor adds \`12 * 1.50 = 18\`, making \`fare = 23\`.
           - Third constructor applies 20% peak-hour charge: \`23 * 1.20 = 21.60\`.
        2. **Final Output:** \`21.60\`.
        `,
        "difficulty": "Extreme",
        "category": "Constructor Overloading & Fare Calculation",
        "hasCode": true
    },
    {
        "id": 45,
        "question": `A banking system tracks multiple accounts with different interest rates.
        - A savings account has a 5% interest rate.
        - A checking account has no interest.
        - Transfers between accounts must be handled properly.
        - Compute the final balance after various transactions.
    
        \`\`\`java
        abstract class Account {
            protected double balance;
    
            Account(double balance) {
                this.balance = balance;
            }
    
            abstract void applyInterest();
    
            void deposit(double amount) {
                balance += amount;
            }
    
            void withdraw(double amount) {
                if (balance >= amount) {
                    balance -= amount;
                }
            }
    
            double getBalance() {
                return balance;
            }
        }
    
        class SavingsAccount extends Account {
            SavingsAccount(double balance) {
                super(balance);
            }
    
            void applyInterest() {
                balance *= 1.05;
            }
        }
    
        class CheckingAccount extends Account {
            CheckingAccount(double balance) {
                super(balance);
            }
    
            void applyInterest() {
                // No interest for Checking Account
            }
        }
    
        public class Bank {
            public static void main(String[] args) {
                SavingsAccount savings = new SavingsAccount(1000);
                CheckingAccount checking = new CheckingAccount(500);
    
                savings.deposit(200);
                checking.withdraw(100);
                savings.applyInterest();
    
                System.out.println(savings.getBalance() + " " + checking.getBalance());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$1260 $400", "isCorrect": true },
            { "text": "$1200 $400", "isCorrect": false },
            { "text": "$1100 $500", "isCorrect": false },
            { "text": "$1250 $400", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Savings Account:** Initial balance = $1000.
        2. **Deposit $200:** New balance = $1200.
        3. **Checking Account:** Initial balance = $500.
        4. **Withdraw $100:** New balance = $400.
        5. **Apply Interest (5% on savings):** $1200 * 1.05 = $1260.
        6. **Final Output:** $1260 $400.
        `,
        "difficulty": "Very Hard",
        "category": "Banking & Transactions",
        "hasCode": true
    },
    {
        "id": 46,
        "question": `A warehouse tracks products with restocking rules.
        - Each product has its own inventory count.
        - If stock drops below 10, restock 50 units.
        - Compute final stock after multiple sales.
    
        \`\`\`java
        class Warehouse {
            static int totalStock = 1000;
            int stock;
    
            Warehouse(int stock) {
                this.stock = stock;
            }
    
            void sell(int quantity) {
                stock -= quantity;
                if (stock < 10) {
                    stock += 50;
                }
                totalStock -= quantity;
            }
    
            static void showTotalStock() {
                System.out.println(totalStock);
            }
        }
    
        public class Inventory {
            public static void main(String[] args) {
                Warehouse w1 = new Warehouse(60);
                Warehouse w2 = new Warehouse(80);
    
                w1.sell(55);
                w2.sell(75);
                w1.sell(5);
                w2.sell(5);
    
                Warehouse.showTotalStock();
                System.out.println(w1.stock + " " + w2.stock);
            }
        }
        \`\`\``,
        "options": [
            { "text": "865 50 50", "isCorrect": true },
            { "text": "880 55 55", "isCorrect": false },
            { "text": "900 40 40", "isCorrect": false },
            { "text": "850 60 60", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Static Variable:** Initializes total stock = 1000.
        2. **Warehouse 1:** Initial stock = 60.
        3. **Warehouse 2:** Initial stock = 80.
        4. **w1 sells 55:** Remaining stock = 5 → Restock to 55.
        5. **w2 sells 75:** Remaining stock = 5 → Restock to 55.
        6. **w1 sells 5:** Remaining stock = 50.
        7. **w2 sells 5:** Remaining stock = 50.
        8. **Total Stock:** 1000 - (55 + 75 + 5 + 5) = 865.
        `,
        "difficulty": "Very Hard",
        "category": "Static Variables & Inventory",
        "hasCode": true
    },
    {
        "id": 47,
        "question": `A company provides different salary structures:
        - Base salary: **$5000**
        - Bonus: **8%** for senior employees.
        - Tax deduction: **12%** on total salary.
        - **Static final TAX_RATE = 0.12**
        - Compute final salary for a senior employee.
    
        \`\`\`java
        abstract class Employee {
            static final double TAX_RATE = 0.12;
            double baseSalary;
    
            Employee(double baseSalary) {
                this.baseSalary = baseSalary;
            }
    
            abstract double calculateSalary();
        }
    
        class SeniorEmployee extends Employee {
            SeniorEmployee(double baseSalary) {
                super(baseSalary);
            }
    
            double calculateSalary() {
                double bonus = baseSalary * 0.08;
                double grossSalary = baseSalary + bonus;
                return grossSalary * (1 - TAX_RATE);
            }
        }
    
        public class Payroll {
            public static void main(String[] args) {
                Employee emp = new SeniorEmployee(5000);
                System.out.println(emp.calculateSalary());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$4400", "isCorrect": false },
            { "text": "$4480", "isCorrect": true },
            { "text": "$4500", "isCorrect": false },
            { "text": "$4600", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Base Salary:** **$5000**
        2. **Bonus Calculation (8%):** **$5000 * 0.08 = $400**
        3. **Gross Salary:** **$5000 + $400 = $5400**
        4. **Tax Deduction (12%):** **$5400 * 0.12 = $648**
        5. **Final Salary:** **$5400 - $648 = $4480**
        `,
        "difficulty": "Very Hard",
        "category": "Abstract Classes & Static Final Variables",
        "hasCode": true
    },
    {
        "id": 48,
        "question": `A warehouse system uses multiple interfaces for inventory tracking:
        - **Stock Management**: Adjusts stock when sales happen.
        - **Reporting**: Generates reports on stock levels.
        - Implement both interfaces and compute the final stock.
    
        \`\`\`java
        interface StockManagement {
            void sell(int quantity);
            void restock(int quantity);
        }
    
        interface Reporting {
            void generateReport();
        }
    
        class Warehouse implements StockManagement, Reporting {
            private int stock;
    
            Warehouse(int stock) {
                this.stock = stock;
            }
    
            public void sell(int quantity) {
                stock -= quantity;
                if (stock < 10) {
                    restock(50);
                }
            }
    
            public void restock(int quantity) {
                stock += quantity;
            }
    
            public void generateReport() {
                System.out.println("Current Stock: " + stock);
            }
        }
    
        public class InventorySystem {
            public static void main(String[] args) {
                Warehouse warehouse = new Warehouse(60);
                warehouse.sell(55);
                warehouse.sell(5);
                warehouse.generateReport();
            }
        }
        \`\`\``,
        "options": [
            { "text": "50", "isCorrect": true },
            { "text": "5", "isCorrect": false },
            { "text": "10", "isCorrect": false },
            { "text": "60", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Initial Stock:** **60**
        2. **First Sale of 55:** 
           - Remaining Stock = **5**
           - Since stock < 10 → **Restock 50** → New Stock = **55**
        3. **Second Sale of 5:** 
           - Remaining Stock = **50**
        4. **Final Output:** **50**
        `,
        "difficulty": "Very Hard",
        "category": "Multiple Interfaces & Inventory Management",
        "hasCode": true
    },
    {
        "id": 49,
        "question": `A payment processing system uses:
        - **Abstract class** for basic transactions.
        - **Interface** for additional functionalities.
        - A discount is applied for VIP customers.
        - Compute the final price after applying all conditions.
    
        \`\`\`java
        abstract class Transaction {
            static final double TAX_RATE = 0.05;
            double amount;
    
            Transaction(double amount) {
                this.amount = amount;
            }
    
            abstract double processPayment();
        }
    
        interface Discount {
            double applyDiscount(double amount);
        }
    
        class CreditCardTransaction extends Transaction implements Discount {
            CreditCardTransaction(double amount) {
                super(amount);
            }
    
            public double applyDiscount(double amount) {
                return amount * 0.90; // 10% discount for VIP
            }
    
            double processPayment() {
                double discountedAmount = applyDiscount(amount);
                return discountedAmount * (1 + TAX_RATE);
            }
        }
    
        public class PaymentSystem {
            public static void main(String[] args) {
                Transaction t = new CreditCardTransaction(1000);
                System.out.println(t.processPayment());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$945", "isCorrect": true },
            { "text": "$1000", "isCorrect": false },
            { "text": "$950", "isCorrect": false },
            { "text": "$960", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Base Amount:** **$1000**
        2. **Apply 10% Discount:** **$1000 * 0.90 = $900**
        3. **Apply 5% Tax:** **$900 * 1.05 = $945**
        4. **Final Output:** **$945**
        `,
        "difficulty": "Very Hard",
        "category": "Abstract Classes & Interfaces",
        "hasCode": true
    },
    {
        "id": 50,
        "question": `A travel agency calculates the total cost for a trip:
        - **Abstract class** for base pricing.
        - **Interface** for extra charges.
        - **Static final TAX_RATE = 0.08**
        - Compute the final cost for a customer with baggage fees.
    
        \`\`\`java
        abstract class Travel {
            static final double TAX_RATE = 0.08;
            double baseFare;
    
            Travel(double baseFare) {
                this.baseFare = baseFare;
            }
    
            abstract double computeFare();
        }
    
        interface ExtraCharges {
            double addBaggageFee(double fare);
        }
    
        class FlightBooking extends Travel implements ExtraCharges {
            FlightBooking(double baseFare) {
                super(baseFare);
            }
    
            public double addBaggageFee(double fare) {
                return fare + 50; // $50 baggage fee
            }
    
            double computeFare() {
                double fareWithBaggage = addBaggageFee(baseFare);
                return fareWithBaggage * (1 + TAX_RATE);
            }
        }
    
        public class TravelAgency {
            public static void main(String[] args) {
                Travel flight = new FlightBooking(300);
                System.out.println(flight.computeFare());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$378", "isCorrect": true },
            { "text": "$350", "isCorrect": false },
            { "text": "$365", "isCorrect": false },
            { "text": "$400", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Base Fare:** **$300**
        2. **Add Baggage Fee:** **$300 + $50 = $350**
        3. **Apply Tax (8%):** **$350 * 1.08 = $378**
        4. **Final Output:** **$378**
        `,
        "difficulty": "Very Hard",
        "category": "Abstract Classes & Extra Charges",
        "hasCode": true
    },
    {
        "id": 50,
        "question": `A transportation company charges fees based on vehicle type:
        - **Base Fare:**
          - Car: **$50**
          - Truck: **$80**
        - **Toll Fees:**
          - Small Vehicles: **$10 per toll**
          - Heavy Vehicles: **$20 per toll**
        - **Static final SERVICE_TAX = 8%**
        - Compute the total fee for a truck passing 3 tolls.
    
        \`\`\`java
        abstract class Vehicle {
            static final double SERVICE_TAX = 0.08;
            double baseFare;
    
            Vehicle(double baseFare) {
                this.baseFare = baseFare;
            }
    
            abstract double computeTotalFare(int tolls);
        }
    
        class Truck extends Vehicle {
            Truck() {
                super(80);
            }
    
            double computeTotalFare(int tolls) {
                double total = baseFare + (tolls * 20);
                return total * (1 + SERVICE_TAX);
            }
        }
    
        public class TollSystem {
            public static void main(String[] args) {
                Vehicle truck = new Truck();
                System.out.println(truck.computeTotalFare(3));
            }
        }
        \`\`\``,
        "options": [
            { "text": "$129.60", "isCorrect": true },
            { "text": "$140.00", "isCorrect": false },
            { "text": "$136.00", "isCorrect": false },
            { "text": "$120.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Base Fare for Truck:** **$80**
        2. **Toll Fees:** **3 * $20 = $60**
        3. **Subtotal:** **$80 + $60 = $140**
        4. **Service Tax (8%):** **$140 * 1.08 = $129.60**
        5. **Final Output:** **$129.60**
        `,
        "difficulty": "Extreme",
        "category": "Abstract Classes & Static Final Variables",
        "hasCode": true
    },
    {
        "id": 51,
        "question": `A smart home system integrates different devices:
        - **Interface** for power management.
        - **Interface** for device control.
        - **Dependency injection** to operate devices.
        - Compute power consumption after running devices.
    
        \`\`\`java
        interface PowerManagement {
            void consumePower(int units);
            int getPowerUsage();
        }
    
        interface DeviceControl {
            void turnOn();
            void turnOff();
        }
    
        class SmartDevice implements PowerManagement, DeviceControl {
            private int powerUsage;
            private boolean isOn;
    
            public void consumePower(int units) {
                if (isOn) {
                    powerUsage += units;
                }
            }
    
            public int getPowerUsage() {
                return powerUsage;
            }
    
            public void turnOn() {
                isOn = true;
            }
    
            public void turnOff() {
                isOn = false;
            }
        }
    
        public class SmartHome {
            public static void main(String[] args) {
                SmartDevice device = new SmartDevice();
                device.turnOn();
                device.consumePower(5);
                device.consumePower(3);
                device.turnOff();
                System.out.println(device.getPowerUsage());
            }
        }
        \`\`\``,
        "options": [
            { "text": "8", "isCorrect": true },
            { "text": "5", "isCorrect": false },
            { "text": "3", "isCorrect": false },
            { "text": "0", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
    
        1. **Device turned ON.**
        2. **Power consumed:** **5 units**.
        3. **Power consumed:** **3 units**.
        4. **Device turned OFF.**
        5. **Final Power Usage:** **8 units**.
        `,
        "difficulty": "Extreme",
        "category": "Multiple Interfaces & Dependency Injection",
        "hasCode": true
    },
    {
        "id": 52,
        "question": `An online food ordering system calculates order costs:
        - **Abstract class** for restaurant orders.
        - **Factory pattern** to generate different orders.
        - **Tax of 5% on total bill.**
        - Compute final bill for a pizza order.
    
        \`\`\`java
        abstract class Order {
            static final double TAX_RATE = 0.05;
            double price;
    
            Order(double price) {
                this.price = price;
            }
    
            abstract double computeTotal();
        }
    
        class PizzaOrder extends Order {
            PizzaOrder() {
                super(20);
            }
    
            double computeTotal() {
                return price * (1 + TAX_RATE);
            }
        }
    
        class OrderFactory {
            static Order createOrder(String type) {
                if (type.equals("Pizza")) return new PizzaOrder();
                return null;
            }
        }
    
        public class FoodOrderingSystem {
            public static void main(String[] args) {
                Order order = OrderFactory.createOrder("Pizza");
                System.out.println(order.computeTotal());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$21.00", "isCorrect": false },
            { "text": "$21.00", "isCorrect": true },
            { "text": "$22.00", "isCorrect": false },
            { "text": "$20.50", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Pizza Base Price:** **$20**
        2. **Tax (5%):** **$20 * 1.05 = $21.00**
        3. **Final Output:** **$21.00**
        `,
        "difficulty": "Extreme",
        "category": "Abstract Classes & Factory Pattern",
        "hasCode": true
    },
    {
        "id": 53,
        "question": `A banking system handles different account types:
        - **Interface for banking transactions.**
        - **Interface for interest calculations.**
        - **Compute final balance after multiple operations.**
    
        \`\`\`java
        interface BankingTransactions {
            void deposit(double amount);
            void withdraw(double amount);
        }
    
        interface InterestCalculations {
            void applyInterest();
        }
    
        class SavingsAccount implements BankingTransactions, InterestCalculations {
            private double balance;
    
            SavingsAccount(double balance) {
                this.balance = balance;
            }
    
            public void deposit(double amount) {
                balance += amount;
            }
    
            public void withdraw(double amount) {
                if (balance >= amount) {
                    balance -= amount;
                }
            }
    
            public void applyInterest() {
                balance *= 1.03; // 3% Interest
            }
    
            public double getBalance() {
                return balance;
            }
        }
    
        public class BankSystem {
            public static void main(String[] args) {
                SavingsAccount account = new SavingsAccount(1000);
                account.deposit(200);
                account.withdraw(100);
                account.applyInterest();
                System.out.println(account.getBalance());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$1133.00", "isCorrect": false },
            { "text": "$1133.00", "isCorrect": true },
            { "text": "$1100.00", "isCorrect": false },
            { "text": "$1120.00", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        
        1. **Initial Balance:** **$1000**
        2. **Deposit:** **$200** → **Balance = $1200**
        3. **Withdraw:** **$100** → **Balance = $1100**
        4. **Apply Interest (3%):** **$1100 * 1.03 = $1133**
        5. **Final Output:** **$1133**
        `,
        "difficulty": "Extreme",
        "category": "Multiple Interface Hierarchies",
        "hasCode": true
    },
    {
        "id": 54,
        "question": `A company's payroll system:
        - Uses an **abstract class** Employee with a static block initializing a static variable.
        - A subclass **Manager** overrides the salary calculation.
        - Compute the final salary for a **Manager with $7500 base pay**.
    
        \`\`\`java
        abstract class Employee {
            static final double TAX_RATE;
            static {
                TAX_RATE = 0.12; // Static block initializing TAX_RATE
            }
            double baseSalary;
    
            Employee(double baseSalary) {
                this.baseSalary = baseSalary;
            }
    
            abstract double calculateSalary();
        }
    
        class Manager extends Employee {
            Manager(double baseSalary) {
                super(baseSalary);
            }
    
            double calculateSalary() {
                double bonus = baseSalary * 0.15; // 15% bonus
                return (baseSalary + bonus) * (1 - TAX_RATE);
            }
        }
    
        public class PayrollSystem {
            public static void main(String[] args) {
                Employee emp = new Manager(7500);
                System.out.println(emp.calculateSalary());
            }
        }
        \`\`\``,
        "options": [
            { "text": "$7395", "isCorrect": true },
            { "text": "$7500", "isCorrect": false },
            { "text": "$7400", "isCorrect": false },
            { "text": "$7200", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Static Block Executes:** TAX_RATE = 12%.
        2. **Base Salary:** $7500.
        3. **Bonus Calculation:** $7500 * 0.15 = $1125.
        4. **Gross Salary:** $7500 + $1125 = $8625.
        5. **Applying Tax (12%):** $8625 * 0.88 = **$7395**.
        `,
        "difficulty": "Extreme",
        "category": "Static Blocks & Constructor Chaining",
        "hasCode": true
    },
    {
        "id": 56,
        "question": `A logistics company manages different types of cargo:
        - Uses **Generics** to handle multiple types.
        - Implements **Upper Bounded Wildcards**.
        - What will be the output?
    
        \`\`\`java
        import java.util.*;
    
        class Cargo<T> {
            T weight;
            Cargo(T weight) {
                this.weight = weight;
            }
    
            void printWeight() {
                System.out.println(weight);
            }
        }
    
        class CargoHandler {
            static void displayWeight(List<? extends Cargo<?>> list) {
                for (Cargo<?> c : list) {
                    c.printWeight();
                }
            }
        }
    
        public class Logistics {
            public static void main(String[] args) {
                List<Cargo<Integer>> intCargo = Arrays.asList(new Cargo<>(50), new Cargo<>(100));
                CargoHandler.displayWeight(intCargo);
            }
        }
        \`\`\``,
        "options": [
            { "text": "50 100", "isCorrect": true },
            { "text": "Compilation Error", "isCorrect": false },
            { "text": "Runtime Error", "isCorrect": false },
            { "text": "50 100 null", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Cargo<Integer> objects created** with values 50 & 100.
        2. **List<Cargo<Integer>> is passed to the method.**
        3. **displayWeight() uses \`? extends Cargo<?>\` to allow any subtype.**
        4. **All Cargo objects print their weight successfully.**
        5. **Final Output:** 50 100.
        `,
        "difficulty": "Extreme",
        "category": "Generics & Wildcards",
        "hasCode": true
    },
    {
        "id": 57,
        "question": `A system dynamically calls a method using Reflection:
        - Uses **Reflection API** to invoke methods at runtime.
        - Uses **Annotations** to mark methods.
        - What will be the output?
    
        \`\`\`java
        import java.lang.reflect.*;
    
        @interface Test {}
    
        class Utility {
            @Test
            public void execute() {
                System.out.println("Executed!");
            }
        }
    
        public class ReflectionDemo {
            public static void main(String[] args) throws Exception {
                Utility obj = new Utility();
                Method method = obj.getClass().getMethod("execute");
    
                if (method.isAnnotationPresent(Test.class)) {
                    method.invoke(obj);
                }
            }
        }
        \`\`\``,
        "options": [
            { "text": "Executed!", "isCorrect": true },
            { "text": "Compilation Error", "isCorrect": false },
            { "text": "Runtime Error", "isCorrect": false },
            { "text": "No Output", "isCorrect": false }
        ],
        "explanation": `
        **Step-by-step execution:**
        1. **Annotation \`@Test\` marks the \`execute()\` method.**
        2. **Reflection API dynamically retrieves the method.**
        3. **It checks if the method has the \`@Test\` annotation.**
        4. **Since it does, \`method.invoke(obj)\` executes \`execute()\`.**
        5. **Final Output:** "Executed!".
        `,
        "difficulty": "Extreme",
        "category": "Reflection & Annotations",
        "hasCode": true
    },
    {
    "id": 58,
    "question": `A payroll system:
    - Uses an **abstract class** Employee with a static block initializing a static variable.
    - A subclass **Manager** overrides the salary calculation.
    - Compute the final salary for a **Manager with $7500 base pay**.

    \`\`\`java
    abstract class Employee {
        static final double TAX_RATE;
        static {
            TAX_RATE = 0.12; // Static block initializing TAX_RATE
        }
        double baseSalary;

        Employee(double baseSalary) {
            this.baseSalary = baseSalary;
        }

        abstract double calculateSalary();
    }

    class Manager extends Employee {
        Manager(double baseSalary) {
            super(baseSalary);
        }

        double calculateSalary() {
            double bonus = baseSalary * 0.15; // 15% bonus
            return (baseSalary + bonus) * (1 - TAX_RATE);
        }
    }

    public class PayrollSystem {
        public static void main(String[] args) {
            Employee emp = new Manager(7500);
            System.out.println(emp.calculateSalary());
        }
    }
    \`\`\``,
    "options": [
        { "text": "$7395", "isCorrect": true },
        { "text": "$7500", "isCorrect": false },
        { "text": "$7400", "isCorrect": false },
        { "text": "$7200", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    1. **Static Block Executes:** TAX_RATE = 12%.
    2. **Base Salary:** $7500.
    3. **Bonus Calculation:** $7500 * 0.15 = $1125.
    4. **Gross Salary:** $7500 + $1125 = $8625.
    5. **Applying Tax (12%):** $8625 * 0.88 = **$7395**.
    `,
    "difficulty": "Extreme",
    "category": "Static Blocks & Constructor Chaining",
    "hasCode": true
},
{
    "id": 59,
    "question": `A payroll system:
    - Uses an **abstract class** Employee with a static block initializing a static variable.
    - A subclass **Manager** overrides the salary calculation.
    - Another subclass **Director** gets an additional 20% performance bonus.
    - Compute the final salary for a **Director with $8000 base pay**.

    \`\`\`java
    abstract class Employee {
        static final double TAX_RATE;
        static {
            TAX_RATE = 0.12; // Static block initializing TAX_RATE
        }
        double baseSalary;

        Employee(double baseSalary) {
            this.baseSalary = baseSalary;
        }

        abstract double calculateSalary();
    }

    class Manager extends Employee {
        Manager(double baseSalary) {
            super(baseSalary);
        }

        double calculateSalary() {
            double bonus = baseSalary * 0.15; // 15% bonus
            return (baseSalary + bonus) * (1 - TAX_RATE);
        }
    }

    class Director extends Manager {
        Director(double baseSalary) {
            super(baseSalary);
        }

        double calculateSalary() {
            double managerSalary = super.calculateSalary();
            double performanceBonus = baseSalary * 0.20; // 20% extra
            return (managerSalary + performanceBonus) * (1 - TAX_RATE);
        }
    }

    public class PayrollSystem {
        public static void main(String[] args) {
            Employee emp = new Director(8000);
            System.out.println(emp.calculateSalary());
        }
    }
    \`\`\``,
    "options": [
        { "text": "$7640", "isCorrect": true },
        { "text": "$7800", "isCorrect": false },
        { "text": "$7500", "isCorrect": false },
        { "text": "$8000", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    1. **Static Block Executes:** TAX_RATE = 12%.
    2. **Base Salary:** $8000.
    3. **Manager Bonus Calculation:** $8000 * 0.15 = $1200.
    4. **Manager Gross Salary:** $8000 + $1200 = $9200.
    5. **Manager Post-Tax Salary:** $9200 * 0.88 = $8096.
    6. **Director Performance Bonus:** $8000 * 0.20 = $1600.
    7. **Final Director Salary:** ($8096 + $1600) * 0.88 = **$7640**.
    `,
    "difficulty": "Extreme",
    "category": "Multi-level Inheritance & Static Blocks",
    "hasCode": true
},
{
    "id": 60,
    "question": `A banking system:
    - Uses **two interfaces**: BankingTransactions and InterestCalculations.
    - **Overdraft protection** applies if balance goes negative.
    - Compute the final balance after multiple transactions.

    \`\`\`java
    interface BankingTransactions {
        void deposit(double amount);
        void withdraw(double amount);
    }

    interface InterestCalculations {
        void applyInterest();
    }

    class SavingsAccount implements BankingTransactions, InterestCalculations {
        private double balance;

        SavingsAccount(double balance) {
            this.balance = balance;
        }

        public void deposit(double amount) {
            balance += amount;
        }

        public void withdraw(double amount) {
            if (balance - amount < 0) {
                balance -= 10; // Overdraft fee
            } else {
                balance -= amount;
            }
        }

        public void applyInterest() {
            balance *= 1.05; // 5% Interest
        }

        public double getBalance() {
            return balance;
        }
    }

    public class BankSystem {
        public static void main(String[] args) {
            SavingsAccount account = new SavingsAccount(500);
            account.deposit(300);
            account.withdraw(900);
            account.applyInterest();
            System.out.println(account.getBalance());
        }
    }
    \`\`\``,
    "options": [
        { "text": "$-10", "isCorrect": false },
        { "text": "$-11.55", "isCorrect": true },
        { "text": "$-5", "isCorrect": false },
        { "text": "$0", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    1. **Initial Balance:** $500.
    2. **Deposit:** $300 → **Balance = $800**.
    3. **Withdraw:** $900 → Overdraft! **$800 - $900 = -100**.
    4. **Overdraft Fee:** -100 - 10 = **-110**.
    5. **Apply Interest (5%):** -110 * 1.05 = **-115.50**.
    6. **Final Output:** **$-11.55**.
    `,
    "difficulty": "Extreme",
    "category": "Interfaces & Banking System",
    "hasCode": true
},
{
    "id": 61,
    "question": `A company wants to filter employees:
    - Uses **Lambda Expressions** for salary filtering.
    - Uses **Streams API** to process the list.
    - Compute the total salary of employees earning more than $5000.

    \`\`\`java
    import java.util.*;
    import java.util.stream.*;

    class Employee {
        String name;
        double salary;

        Employee(String name, double salary) {
            this.name = name;
            this.salary = salary;
        }
    }

    public class SalaryProcessing {
        public static void main(String[] args) {
            List<Employee> employees = Arrays.asList(
                new Employee("John", 4500),
                new Employee("Alice", 7000),
                new Employee("Bob", 5500),
                new Employee("Charlie", 4800)
            );

            double totalSalary = employees.stream()
                .filter(e -> e.salary > 5000)
                .mapToDouble(e -> e.salary)
                .sum();

            System.out.println(totalSalary);
        }
    }
    \`\`\``,
    "options": [
        { "text": "$12500", "isCorrect": true },
        { "text": "$10000", "isCorrect": false },
        { "text": "$11500", "isCorrect": false },
        { "text": "$13000", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    1. **Employee List Created:**
       - John: $4500
       - Alice: $7000
       - Bob: $5500
       - Charlie: $4800
    2. **Stream API filters employees with salary > $5000:**
       - Alice: $7000
       - Bob: $5500
    3. **Sum of Filtered Salaries:** $7000 + $5500 = **$12500**.
    `,
    "difficulty": "Extreme",
    "category": "Lambda Expressions & Streams",
    "hasCode": true
},
{
    "id": 62,
    "question": `What will be the output of the following Java code?
    - Uses **post-increment and pre-decrement** inside method calls.
    - Pay attention to how **values are updated** after each operation.

    \`\`\`java
    class IncrementTrick {
        static int process(int a, int b) {
            a += b++ - --a * 3 + b--;
            return a;
        }

        public static void main(String[] args) {
            int x = 6, y = 4;
            int result = process(x, y);
            System.out.println(result + " " + x + " " + y);
        }
    }
    \`\`\``,
    "options": [
        { "text": "-8 6 4", "isCorrect": true },
        { "text": "10 7 3", "isCorrect": false },
        { "text": "-9 6 5", "isCorrect": false },
        { "text": "Compilation Error", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    
    1. **x = 6, y = 4**.
    2. **Inside process():**
       - \`a += b++ - --a * 3 + b--\`
       - Breakdown:
         - \`--a\` → \`a = 5\`
         - \`b++\` → Returns \`4\`, then \`b = 5\`
         - \`b--\` → Returns \`5\`, then \`b = 4\`
         - Expression: \`4 - (5 * 3) + 5 = -8\`
       - Final **a = -8**.
    3. **Final Output:** \`-8 6 4\`.
    `,
    "difficulty": "Extreme",
    "category": "Operator Precedence & Increment/Decrement",
    "hasCode": true
},
{
    "id": 63,
    "question": `What will be the output of the following Java code?
    - Uses **static blocks** and **final variables**.
    - Watch out for **the order of execution**.

    \`\`\`java
    class StaticFinalExample {
        static final int BASE;
        static int x;
        
        static {
            BASE = 100;
            x = BASE / 2;
        }

        public static void main(String[] args) {
            System.out.println(BASE + " " + x);
        }
    }
    \`\`\``,
    "options": [
        { "text": "100 50", "isCorrect": true },
        { "text": "Compilation Error", "isCorrect": false },
        { "text": "100 0", "isCorrect": false },
        { "text": "Runtime Error", "isCorrect": false }
    ],
    "explanation": `
    **Step-by-step execution:**
    
    1. **Static Block Executes Before Main():**
       - \`BASE\` is declared as **static final**, but **initialized inside a static block**.
       - \`x = BASE / 2\` → \`x = 50\`.
    2. **Final Output:** \`100 50\`.
    `,
    "difficulty": "Hard",
    "category": "Static Blocks & Final Variables",
    "hasCode": true
},



    
];

shuffleOptions(oopMCQs);