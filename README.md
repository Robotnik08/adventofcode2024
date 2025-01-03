# Advent of code 2024

This is my repository for the Advent of Code 2024. I will be solving the puzzles in [Dosato](https://github.com/Robotnik08/cdosato).
<br>

## Context

Dosato is a programming language that I created. It is a unique and robust intepreted language designed for the general purpose. It is a high-level language that is easy to learn and use. It is a dynamically typed language (with support for static typing) that supports both functional and object-oriented programming paradigms. It is a language that is designed to be easy to read and write.
<br>

The goal of this repository is to solve the puzzles in Dosato. I will be solving the puzzles in the order that they are released. I will be posting my solutions in this repository. 

### Why Dosato?

This is mainly because I want to test the robustness of the Dosato language, and see how well it can handle complex problems.


## How to run the code

To run the code, you will need to have the Dosato interpreter installed on your machine. You can download the Dosato interpreter [here](https://github.com/Robotnik08/cdosato/releases/latest). Once you have the Dosato interpreter installed, you can run the code by typing the following command in the terminal:

```
dosato <filename>
```

Where `<filename>` is the name of the Dosato file that you want to run. For example, if you want to run the code in the file `day1.to`, you would type the following command in the terminal:

```bash
dosato day1.to
```

Thats it really. I hope you enjoy the solutions. Feel free to reach out to me if you have any questions or suggestions. I am always happy to help.


## Log


- [x] Day 1
    - [x] Part 1
        - The solution for part 1 was pretty simple compared to last year. I did have an unrelated problem with a bug I found in the Dosato interpreter. I had to fix that before I could continue. The solution was pretty simple.
    - [x] Part 2
        - The solution for part 2 was also pretty simple. All in all I used 2 one liners to solve both problems. I am happy with the solution.
- [x] Day 2
    - [x] Part 1
        - Part 1 was cool.
    - [x] Part 2
        - The solution of Part 1 could be reused for Part 2, I used the brute force approach to solve the problem.
- [x] Day 3
    - [x] Part 1
        - Part 1 was pretty easy, my programming language building skills taught me a lot about parsing expressions like that. I found a bug in the stringSplit function, which I took care of, making it an easy solution
    - [x] Part 2
        - It was incredebly easy to modify part 1 to also give the answer for part 2, it took me less then 5 minutes
- [x] Day 4
    - [x] Part 1
        - I decided to do the approach of appending all the lines to 1 string, then counting the amount of "XMAS" and "SAMX".
    - [x] Part 2
        - Easy solution, just looped through all the strings and at each "A" I check if it's surrounded by the right characters.
- [x] Day 5
    - [x] Part 1
        - I originally used a slow loop, but I switched to checking sort with a map, which was a lot faster.
    - [x] Part 2
        - Really simple expansion of part 1, just added a few more checks.
- [x] Day 6
    - [x] Part 1
        - Part 1 was pretty simple
    - [x] Part 2
        - This was a fun challenge, eventually I settled with a brute force approach, which worked fine enough. The solve time is not that great, but it works. There must be a different way to solve this.
- [x] Day 7
    - [x] Part 1
        - Simple Binary search
    - [x] Part 2
        - Expanded on part 1, and added a few more checks.
- [x] Day 8
    - [x] Part 1
        - Using permutations, we solve the problem
    - [x] Part 2
        - Really easy expansion of part 1.
- [x] Day 9
    - [x] Part 1
        - The solution was pretty simple, It was a bruteforce approach, but it worked.
    - [x] Part 2
        - The Solution is rough, this brute force takes over 2 minutes to solve, Might rewrite this in the future.
- [x] Day 10
    - [x] Part 1
        - Super easy, misread and accidentally solved part 2 first.
    - [x] Part 2
        - I could use the previous solution to solve this. Both solutions fit under 20 lines of code.
- [x] Day 11
    - [x] Part 1
        - Really simple brute force approach
    - [x] Part 2
        - My bruteforce approach wouldn't work for part 2, I need to come up with a different solution. Ended up keeping a dictionairy of all the duplicates, instead of checking the whole list and wasting time checking the same thing multiple times.
- [x] Day 12
    - [x] Part 1
        - Simple flood fill got the job done.
    - [x] Part 2
        - The amount of corners is the same as the amount of sides, so I counted the corners and used those.
- [x] Day 13
    - [x] Part 1
        - Used Cramers rule to solve the problem
    - [x] Part 2
        - Because the solution was O(1), I just added 1 parameter to the function and it worked.
- [x] Day 14
    - [x] Part 1
        - I did this in dosato, made a class and walked the robots
    - [x] Part 2
        - I used the dosato graphics library to draw each frame and save it to an image, then I looked through the folder to find the tree
- [x] Day 15
    - [x] Part 1
        - Part one was quite simple.
    - [x] Part 2
        - I had to redo part 1 for a more efficient solution, it took me a bit, but I managed to pull it off. I also build a visualizer for the solution.
- [x] Day 16
    - [x] Part 1
        - Simple Dijkstra algorithm solved the maze
    - [x] Part 2
        - I backtracked the path to find all of the best paths
- [x] Day 17
    - [x] Part 1
        - Virtual Machine remake, up my alley
    - [x] Part 2
        - Part two was really hard, I eventually managed to figure out the solution, but it took me a while.
- [x] Day 18
    - [x] Part 1
        - Simple Dijkstra solves the maze. 
    - [x] Part 2
        - Used a binary search to find the answer.
- [x] Day 19
    - [x] Part 1
        - Simple recursive function solved the problem
    - [x] Part 2
        - Part 2 was actually easier lol.
- [x] Day 20
    - [x] Part 1
        - Part one was tricky, but a dirty brute force approach got the job done.
    - [x] Part 2
        - Expanded on part 1, and added a few more checks, it takes a looong time to solve, but it works.
- [x] Day 21
    - [x] Part 1
        - Wow, that was extremely difficult, But I managed to make a solution that is extremely scalable.
    - [x] Part 2
        - Thanks to my prediction, I was able to solve part 2 in a few minutes.
- [x] Day 22
    - [x] Part 1
        - Really easy, just a simple loop
    - [x] Part 2
        - My original bruteforce would've taken too long, due to the lack of hashable object keys in the language at the moment, I came up with hashing the numbers myself, and then using a flat array (really big one) to store the values.
- [x] Day 23
    - [x] Part 1
        - Very simple, just a few loops
    - [x] Part 2
        - This was pretty difficult, I first used a plain Bron Kerbosch algorithm, but that was too slow, so I had to optimize it by using a pivot. https://en.wikipedia.org/wiki/MaxCliqueDyn_algorithm
- [x] Day 24
    - [x] Part 1
        - This was pretty easy, it didn't take me long to solve and simulate the gates
    - [x] Part 2
        - Extremely hard, I had to graph out the gates and look for mistakes manually.
- [x] Day 25
    - [x] Part 1
        - Super easy puzzle to end the year with
    - [x] Part 2
        - Merry Christmas!
