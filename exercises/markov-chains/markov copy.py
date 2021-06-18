"""Generate Markov text from text files."""

from random import choice


def open_and_read_file(file_path):
    """Take file path as string; return text as string.

    Takes a string that is a file path, opens the file, and turns
    the file's contents as one string of text.
    """

    contents = open(file_path).read()

    return contents



def make_chains(rawtext):
    """Take input text as string; return dictionary of Markov chains.

    A chain will be a key that consists of a tuple of (word1, word2)
    and the value would be a list of the word(s) that follow those two
    words in the input text.

    For example:

        >>> chains = make_chains('hi there mary hi there juanita')

    Each bigram (except the last) will be a key in chains:

        >>> sorted(chains.keys())
        [('hi', 'there'), ('mary', 'hi'), ('there', 'mary')]

    Each item in chains is a list of all possible following words:

        >>> chains[('hi', 'there')]
        ['mary', 'juanita']

        >>> chains[('there','juanita')]
        [None]
    """
    #text_string is the name of the file, passed in as a parameter
    # rawtext = open_and_read_file(text_string) #This is a string 
    words = rawtext.split()
    # print(word)
    
    chain = {}
    wordvalue = []

    for i in range(len(words) - 1): 
        print("*"*20, f"in loop # {i}")
        print(f"\tchain = {chain}\n\t[words[i], words[i + 1]] --> [{words[i]}, {words[i + 1]}]\n") 
        key_tuple = (words[i], words[i + 1])
        chain[key_tuple] = 
        key_value = ([words[i +2] : words[i +3] : 1])
        #chain_values= [chain[key_tuple] :]
        #[]
        
        #key value list and be made with line slicing? function that would iterate and produce the trailing words for all the tuples
        #words[i + 1] - words [i]# gets overwritten each time thru loop, how to use prexisting value instead replace?
        # think about how to see what is at this new key_tuple in the dict 
        # {('would', 'you'): ["words", "go", "here"]}

    # print(chain) 

    return chain


#range(len(word[i + 2] -1)) THIS AINT IT
#range(len(word[i + 2]) - 2) THIS AINT IT EITHER
#chain.get(word[i], word[i + 1]) = 0 NO M'AM
#Line 50 add to dictionary. Use both words as a key. 
#Use get. later to add a value

# Would you could you in a house?
# Would you could you with a mouse?
# Would you could you in a box?
# Would you could you with a fox?
# Would you like green eggs and ham?
# Would you like them, Sam I am?

def make_text(chains):
    """Return text from chains."""

    words = []

    # your code goes here

    return ' '.join(words)


input_path = 'green-eggs.txt'
# input_path = 'smol.txt'
# Open the file and turn it into one long string
input_text = open_and_read_file(input_path) # make a string from contents of a file

# Get a Markov chain
chains = make_chains(input_text) # input_text is already a string that was the contenste of the file

# Produce random text
random_text = make_text(chains)

print(random_text)