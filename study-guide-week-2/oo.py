# Create your classes here
#Make 3 Python classes that could store the information described below. 
# Use the examples to guide you in creating class definitions for the following objects. 
# Define an __init__ method to allow callers of this class to provide initial values for each attribute. 
# Note: these classes should all subclass object; none is a subclass of any other************

#student info 
#First name /last name/ address

student_dict = {(Jasmine': 'Debugger, Computer Street'), 
                (Jacqui: Console ,888 Binary Ave
                )}

alberta_capital = ['What is the capital of Alberta?\': 'Edmonton']
python_author = ['Who is the author of Python?\': 'Guido Van Rossum']

class Student:
    def StudentInfo():
    """Write a class that can store data such as this:first_name, last_name, address"""

#Notice that an Exam should have an attribute called questions. 
# Simply initialize the questions attribute as an empty list in the body __init__ function. 
# We’ll deal with adding questions to the exam later on in this assignment. 
# Your __init__ function should take a name for the exam as a parameter.



class Questions:
    def ask_and_evaluate(): 
        """Questions include a question and a correct answer. 
        Write a class that can store this data"""     
        
        
        
        
        
        
class Exam:
    def administer()
    #For example, here are two exams. Make a class that could store data like this. 
    # Since the questions attribute will be a list of Question objects, 
    # let’s call the questions above alberta_capital and python_author. 
    # We might also imagine we have a couple Questions we instantiated 
    # called ubermelon_competitor and balloonicorn_color. In that case, 
    # we could make exams with this data:name/questions/Midterm/alberta_capital, python_author
    #Final ubermelon_competitor, balloonicorn_color

#Part 2
#Add a method called add_question to the Exam class which t
# takes a Question and adds it to the exam’s list of questions.
#Add a method called ask_and_evaluate to the Question class. 
# This method should print the question to the console and prompt the user for an answer. 
# It should then return True or False depending on whether 
# the correct answer matches the user’s answer.

#Add a method called administer to the Exam class which:
#administers all of the exam’s questions (how do you access each question in turn? Once you have a question, how do you administer it?), and
#returns the user’s tally of correct answers (as a decimal percentage)
#So, building on our code from problem 2, here’s how the Exam class should work.
#Inside the Exam.administer method, you’ll need to first initialize a variable called score; set it to zero.

#Next, loop through each of the questions in the exam.
#For each question, call the question’s method from Problem #2 — ask_and_evaluate.
#If the return value of ask_and_evaluate is True, increment the score.
#After the last question has been administered, calculate and return the percentage score.
#Part 3: Create an Exam for a Student
#Reuse Your Classes (Yay!)


#Part 3 doesn’t require you to modify the class definitions you’ve created in the previous two parts of this assignment. You will, however, need to use the classes you’ve defined.
#Write a class called StudentExam that has two methods: __init__ and take_test. This class should be able to store a student, an exam, and the student’s score for that exam.
#The take_test method administers the exam and assigns the actual score to the StudentExam instance. This method should also print a message to the screen indicating the score; a return value isn’t required.
#Now, write a function (not a method) called example, which does the following:
#Creates an exam
#Adds a few questions to the exam
#These should be part of the function; no need to prompt the user for questions.
#Creates a student
#Instantiates a StudentExam, passing the student and exam you just created as arguments
#Administers the test for that student using the take_test method you wrote


#Part 4: Inheritance
#A “quiz” is like an exam — it’s a set of questions that students are prompted to answer. However, whereas exams are given a percentage score, quizzes are pass/fail. If you answered at least half of the questions correctly, you pass the quiz; otherwise, you fail. When you call the administer method on a quiz, it should return 1 if you passed or 0 if you failed.
#Think about how you could solve this requirement: you have an Exam class and you want to have a Quiz class that is similar.
#As you saw in Part 4 with StudentExam, you will also need a new class that allows a student to take a quiz and stores the score received.
#Write code to solve this problem. Incorporate as many of the “design” parts of the class lectures as you feel comfortable with.

