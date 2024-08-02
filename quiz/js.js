const questions = [
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Divide", "B. Combine", "C. Analyze", "D. Sort"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a typical application of the divide and conquer technique?",
    options: [
      "A. Sorting algorithms",
      "B. Searching algorithms",
      "C. Graph traversal algorithms",
      "D. Matrix multiplication algorithms",
    ],
    answer: "C",
  },
  {
    question: "What does the 'merge' step involve in the merge sort algorithm?",
    options: [
      "A. Sorting the individual elements of the array.",
      "B. Dividing the array into smaller subarrays.",
      "C. Combining two sorted subarrays into a single sorted array.",
      "D. Repeatedly partitioning the array into smaller sections.",
    ],
    answer: "C",
  },
  {
    question:
      "Which notation is commonly used to represent the worst-case time complexity of an algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n^2)"],
    answer:
      "All options (A, B, C, D) are commonly used to represent worst-case time complexity, depending on the algorithm.",
  },
  {
    question:
      "The growth function O(log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "B",
  },
  {
    question:
      "What is the main advantage of using the divide and conquer technique?",
    options: [
      "A. It guarantees a linear time complexity for all problems.",
      "B. It reduces the space complexity of algorithms.",
      "C. It allows for efficient parallelization of algorithms.",
      "D. It eliminates the need for recursion in algorithms.",
    ],
    answer: "C",
  },
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "What does the 'conquer' step involve in the divide and conquer technique?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is an advantage of the greedy technique?",
    options: [
      "A. It always guarantees the optimal solution",
      "B. It is faster than dynamic programming for all types of problems",
      "C. It is easy to implement",
      "D. It can solve NP-hard problems efficiently",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is an example of a problem that can be solved using the greedy technique and dynamic programming?",
    options: [
      "A. Longest increasing subsequence",
      "B. Shortest path in a graph",
      "C. Matrix chain multiplication",
      "D. Sudoku solving",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following problems can be solved using the greedy technique?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. Minimum Spanning Tree Problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a common approach to optimizing the space complexity in dynamic programming?",
    options: [
      "A. Using a bottom-up approach",
      "B. Using a top-down approach",
      "C. Using memorization",
      "D. Using tabulation",
    ],
    answer: "A",
  },
  {
    question:
      "Which problems cannot be solved optimally using the greedy technique?",
    options: [
      "A. Huffman coding",
      "B. Job sequencing with deadlines",
      "C. Activity selection problem",
      "D. Coin change problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which technique is more suitable for solving problems that exhibit the greedy choice property?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle problems with the greedy choice property",
    ],
    answer: "A",
  },
  {
    question:
      "Which problems can be solved using the knapsack algorithm in dynamic programming?",
    options: [
      "A. Scheduling problem",
      "B. Bin packing problem",
      "C. 0/1 knapsack problem",
      "D. All of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Which technique is more suitable for solving problems that involve finding the shortest or longest path in a graph?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable",
      "D. Neither technique is suitable for graph problems",
    ],
    answer: "B",
  },
  {
    question:
      "In dynamic programming, what does the principle of optimality state?",
    options: [
      "A. The optimal solution to a problem can be constructed from optimal solutions to its subproblems",
      "B. The optimal solution to a problem can be obtained by making locally optimal choices",
      "C. The optimal solution to a problem can be found using a divide-and-conquer approach",
      "D. The optimal solution to a problem can be derived using backtracking",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more suitable for solving problems that involve making a sequence of choices?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable",
      "D. Neither technique is suitable for problems involving sequential choices",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following algorithms is an example of the greedy technique?",
    options: [
      "A. Dijkstra's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Floyd-Warshall algorithm",
      "D. Prim's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a disadvantage of dynamic programming?",
    options: [
      "A. It can only be applied to problems with overlapping subproblems",
      "B. It has a high-time complexity",
      "C. It requires extensive use of recursion",
      "D. It can have a high memory requirement for large problem instances",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a disadvantage of the greedy technique?",
    options: [
      "A. It isn't easy to implement",
      "B. It may not always find the optimal solution",
      "C. It requires a large amount of memory",
      "D. It has a high-time complexity",
    ],
    answer: "B",
  },
  {
    question:
      "In the greedy technique, which strategy involves making the choice that looks best now?",
    options: [
      "A. Divide and conquer",
      "B. Backtracking",
      "C. Dynamic programming",
      "D. Greedy choice property",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following algorithms uses the greedy technique to find the shortest path in a graph?",
    options: [
      "A. Kruskal's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Prim's algorithm",
      "D. Dijkstra's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is an application of the greedy technique?",
    options: [
      "A. Text compression",
      "B. Graph colouring",
      "C. DNA sequencing",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which data structure is commonly used to implement memoization in dynamic programming?",
    options: ["A. Stack", "B. Queue", "C. Hash table", "D. Linked list"],
    answer: "C",
  },
  {
    question:
      "Which dynamic programming technique involves filling up a table of values bottom-up?",
    options: [
      "A. Memoization",
      "B. Tabulation",
      "C. Recursion",
      "D. Iteration",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving optimization problems, such as finding the maximum or minimum value?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can solve optimization problems",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving problems with overlapping subproblems?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle overlapping subproblems",
    ],
    answer: "B",
  },
  {
    question:
      "What is the critical difference between the greedy technique and dynamic programming?",
    options: [
      "A. Greedy technique uses a top-down approach, while dynamic programming uses a bottom-up approach",
      "B. Greedy technique solves problems recursively, while dynamic programming solves them iteratively",
      "C. The greedy technique finds the optimal solution at each step, while dynamic programming stores and reuses solutions to subproblems",
      "D. Greedy technique is faster than dynamic programming for all types of problems",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is not a characteristic of the greedy technique?",
    options: [
      "A. It makes locally optimal choices",
      "B. It guarantees a globally optimal solution",
      "C. It does not require backtracking",
      "D. It can be applied to any problem",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is necessary for a problem to be solved using dynamic programming?",
    options: [
      "A. Optimal substructure",
      "B. Additive subproblems",
      "C. Greedy choice of property",
      "D. Recursive subproblems",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following problems can be efficiently solved using dynamic programming?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a necessary condition for a problem to be solved using the greedy technique?",
    options: [
      "A. Optimal substructure",
      "B. Overlapping subproblems",
      "C. Additive subproblems",
      "D. Recursive subproblems",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is generally faster in terms of runtime complexity?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same runtime complexity.",
      "D. The runtime complexity depends on the specific problem",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary disadvantage of using brute force in algorithm design?",
    options: [
      "A. It requires extensive knowledge of advanced data structures",
      "B. It is inefficient and can be computationally expensive",
      "C. It is difficult to implement and prone to errors",
      "D. It is only applicable to small-scale problems",
    ],
    answer: "B",
  },
  {
    question:
      "Which data structure is commonly used in brute force algorithms?",
    options: ["A. Linked lists", "B. Trees", "C. Hash tables", "D. Arrays"],
    answer: "D",
  },
  {
    question:
      "What is the main drawback of using brute force for problem-solving?",
    options: [
      "A. It lacks generality and cannot be applied to various problem domains",
      "B. It requires advanced knowledge of mathematical formulas",
      "C. It is highly susceptible to errors and mistakes in implementation",
      "D. It often leads to exponential time complexity",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is an example of a problem that can be solved using brute force?",
    options: [
      "A. Minimum Spanning Tree",
      "B. Knapsack Problem",
      "C. Dijkstra's algorithm",
      "D. Topological sorting",
    ],
    answer: "B",
  },
  {
    question: "How does an exhaustive search differ from a greedy algorithm?",
    options: [
      "A. Exhaustive search explores all possible solutions, while greedy algorithms make locally optimal choices.",
      "B. Exhaustive search requires fewer computational resources than greedy algorithms.",
      "C. Greedy algorithms guarantee to find the optimal solution, while exhaustive search does not.",
      "D. Greedy algorithms only apply to small-scale problems, while exhaustive searches can handle more significant issues.",
    ],
    answer: "A",
  },
  {
    question: "What is the time complexity of a brute force algorithm?",
    options: ["A. O(n log n)", "B. O(n^2)", "C. O(log n)", "D. O(1)"],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a characteristic of brute force algorithms?",
    options: [
      "A. They explore all possible solutions.",
      "B. They are based on exhaustive searches.",
      "C. They often involve trying every possible option.",
      "D. They are always the most efficient approach.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the main difference between brute force and greedy algorithms?",
    options: [
      "A. Brute force algorithms always guarantee to find the optimal solution.",
      "B. Greedy algorithms are more efficient than brute-force algorithms.",
      "C. Brute force algorithms explore all possible solutions, while greedy algorithms make locally optimal choices.",
      "D. Greedy algorithms are only applicable to small-scale problems.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary advantage of using exhaustive search over other algorithms?",
    options: [
      "A. It always finds the optimal solution.",
      "B. It requires fewer computational resources.",
      "C. It guarantees faster execution time.",
      "D. It is more straightforward to implement.",
    ],
    answer: "A",
  },
  {
    question:
      "Given the array 12 43 67 56 20 and a key of 43, how many comparisons will be done in binary search?",
    options: ["A. 1", "B. 3", "C. 2", "D. 4"],
    answer: "C",
  },
  {
    question:
      "Which special pointer indicates the absence of a node's successor?",
    options: ["A. null", "B. void", "C. dangling", "D. wild"],
    answer: "A",
  },
  {
    question:
      "What is the output of the following code? int x = 5; System.out.println(x++);",
    options: ["A. 4", "B. 5", "C. 6", "D. Error"],
    answer: "B",
  },
  {
    question: "Which keyword is used to define a constant variable in Java?",
    options: ["A. final", "B. static", "C. const", "D. constant"],
    answer: "A",
  },
  {
    question:
      "What is the default value assigned to an uninitialized variable of type int in Java?",
    options: ["A. 0", "B. 1", "C. -1", "D. null"],
    answer: "A",
  },
  {
    question:
      "Algorithms that require an exponential number of operations are practical for solving only problems of tiny size.",
    options: ["A. true", "B. false"],
    answer: "A",
  },
  {
    question:
      "What is the access modifier for a public member variable in a class?",
    options: ["A. public", "B. private", "C. protected", "D. default"],
    answer: "A",
  },
  {
    question: "A graph with numbers assigned to its edges is called ______",
    options: [
      "A. weighted graph",
      "B. directed graph",
      "C. path graph",
      "D. numbered graph",
    ],
    answer: "A",
  },
  {
    question: "Big O is associated with _________",
    options: [
      "A. best case and upper bound",
      "B. average case and upper bound",
      "C. worst case and upper bound",
      "D. lower bound and worst case",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    options: ["A. int", "B. boolean", "C. string", "D. double"],
    answer: "C",
  },
  {
    question:
      "Given the array 12 45 67 56 20 and a key of 45, how many comparisons will be made in binary search?",
    options: ["A. 1", "B. 3", "C. 2", "D. 4"],
    answer: "C",
  },
  {
    question:
      "Given that C(n) = 0.5n(n-1), how much longer will an algorithm run if we triple the input size?",
    options: ["A. 9", "B. 12", "C. 6", "D. 4"],
    answer: "A",
  },
  {
    question:
      "What is the output of the following code? String name = 'John'; System.out.println(name.length());",
    options: ["A. 3", "B. 4", "C. 5", "D. Error"],
    answer: "B",
  },
  {
    question: "Which keyword is used to create an object in Java?",
    options: ["A. class", "B. new", "C. object", "D. create"],
    answer: "B",
  },
  {
    question:
      "Given the array 12 45 26 18 65 20, how many comparisons will be done using linear search with a key of 20?",
    options: ["A. 1", "B. 2", "C. 6", "D. 4"],
    answer: "C",
  },
  {
    question: "Which traversal order does the depth-first search follow?",
    options: [
      "A. Breadth-first",
      "B. Level-order",
      "C. Last-in, first-out",
      "D. First-in, first-out",
    ],
    answer: "C",
  },
  {
    question:
      "In the tower of Hanoi problem, two or more discs can be moved at a time.",
    options: ["A. true", "B. false"],
    answer: "B",
  },
  {
    question: "What is the first number in the Fibonacci sequence?",
    options: ["A. 0", "B. 1", "C. 2", "D. -1"],
    answer: "A",
  },
  {
    question:
      "A mixture of natural language and programming language-like constructs is called _____",
    options: [
      "A. code proper",
      "B. pseudocode",
      "C. program",
      "D. domain-specific language",
    ],
    answer: "B",
  },
  {
    question:
      "The time complexity of a divide and conquer algorithm can be expressed using the following:",
    options: [
      "A. Big O notation",
      "B. Theta notation",
      "C. Omega notation",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to solve the maximum subarray sum problem efficiently in O(n) time?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Kadane's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to solve the maximum subarray sum problem efficiently in O(n log n) time?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Divide and Conquer algorithm",
    ],
    answer: "D",
  },
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question: "In the divide and conquer technique, what is the base case?",
    options: [
      "A. The simplest form of the problem can be solved directly.",
      "B. The largest subproblem that can be divided further.",
      "C. The step where the solutions of the subproblems are combined.",
      "D. The analysis of the time and space complexity of the algorithm.",
    ],
    answer: "A",
  },
  {
    question:
      "What does the 'conquer' step involve in the divide and conquer technique?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following growth functions represents exponential time complexity?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(2^n)"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a typical application of the divide and conquer technique?",
    options: [
      "A. Sorting algorithms",
      "B. Searching algorithms",
      "C. Graph traversal algorithms",
      "D. Matrix multiplication algorithms",
    ],
    answer: "C",
  },
  {
    question:
      "The growth function O(n^2) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "C",
  },
  {
    question: "What is the worst-case time complexity of binary search?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question:
      "The growth function O(log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "B",
  },
  {
    question:
      "Which algorithm uses divide and conquer to find the kth smallest element in an unsorted array?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Selection algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to multiply polynomials efficiently?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Karatsuba algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Divide", "B. Combine", "C. Analyze", "D. Sort"],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses a divide-and-conquer approach to find the closest pair of points in a plane?",
    options: [
      "A. Depth-First Search (DFS)",
      "B. Breadth-First Search (BFS)",
      "C. Dijkstra's algorithm",
      "D. Closest Pair algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "What is the main advantage of using the divide and conquer technique?",
    options: [
      "A. It guarantees a linear time complexity for all problems.",
      "B. It reduces the space complexity of algorithms.",
      "C. It allows for efficient parallelization of algorithms.",
      "D. It eliminates the need for recursion in algorithms.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Combine", "B. Analyze", "C. Divide", "D. Search"],
    answer: "D",
  },
  {
    question:
      "The growth function O(n!) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Factorial", "D. Exponential"],
    answer: "C",
  },
  {
    question:
      "Which algorithm uses the divide and conquer technique to solve the matrix multiplication problem?",
    options: [
      "A. Prim's algorithm",
      "B. Kruskal's algorithm",
      "C. Strassen's algorithm",
      "D. Floyd-Warshall algorithm",
    ],
    answer: "C",
  },
  {
    question:
      "What is the time complexity of the quicksort algorithm in the average case?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question: "What does the 'merge' step involve in the merge sort algorithm?",
    options: [
      "A. Sorting the individual elements of the array.",
      "B. Dividing the array into smaller subarrays.",
      "C. Combining two sorted subarrays into a single sorted array.",
      "D. Repeatedly partitioning the array into smaller sections.",
    ],
    answer: "C",
  },
  {
    question:
      "Which algorithms use divide and conquer to find the maximum subarray sum?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Kadane's algorithm",
    ],
    answer: "D",
  },
  {
    question: "Which of the following best describes a growth function?",
    options: [
      "A. An algorithm that solves a problem using a divide-and-conquer approach.",
      "B. A mathematical function that describes the resource usage of an algorithm as the input size increases.",
      "C. A technique for optimizing data structures to minimize memory consumption.",
      "D. A measure of the complexity of an algorithm based on the number of operations it performs.",
    ],
    answer: "B",
  },
  {
    question:
      "Which data structure is commonly used to implement the divide and conquer technique?",
    options: ["A. Arrays", "B. Linked lists", "C. Stacks", "D. Trees"],
    answer: "D",
  },
  {
    question: "In divide and conquer, what does the 'divide' step involve?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "A",
  },
  {
    question:
      "Which notation is commonly used to represent the worst-case time complexity of an algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n^2)"],
    answer:
      "All options (A, B, C, D) are commonly used to represent worst-case time complexity, depending on the algorithm.",
  },
  {
    question:
      "What is the time complexity of the mergesort algorithm in the worst case?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a characteristic of divide and conquer algorithms?",
    options: [
      "A. They can often be parallelized.",
      "B. They usually have a recursive structure.",
      "C. They always have a time complexity of O(n log n).",
      "D. They involve breaking down a problem into smaller subproblems.",
    ],
    answer: "C",
  },
  {
    question:
      "The growth function O(n log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Superlinear"],
    answer: "D",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following algorithms uses the greedy technique to find the shortest path in a graph?",
    options: [
      "A. Kruskal's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Prim's algorithm",
      "D. Dijkstra's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which dynamic programming technique involves filling up a table of values bottom-up?",
    options: [
      "A. Memoization",
      "B. Tabulation",
      "C. Recursion",
      "D. Iteration",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is an application of the greedy technique?",
    options: [
      "A. Text compression",
      "B. Graph colouring",
      "C. DNA sequencing",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "In dynamic programming, which technique can be used to avoid redundant computations?",
    options: [
      "A. Backtracking",
      "B. Memoization",
      "C. Greedy choice of property",
      "D. Depth-first search",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving problems with overlapping subproblems?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle overlapping subproblems",
    ],
    answer: "B",
  },
  {
    question:
      "Which problems can be solved using the knapsack algorithm in dynamic programming?",
    options: [
      "A. Scheduling problem",
      "B. Bin packing problem",
      "C. 0/1 knapsack problem",
      "D. All of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is a common approach to optimizing the space complexity in dynamic programming?",
    options: [
      "A. Using a bottom-up approach",
      "B. Using a top-down approach",
      "C. Using memorization",
      "D. Using tabulation",
    ],
    answer: "A",
  },
  {
    question:
      "The growth function O(n log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Superlinear"],
    answer: "D",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to calculate the power of a number efficiently?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Exponentiation by squaring",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following problems can be solved using the greedy technique?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. Minimum Spanning Tree Problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following algorithms is an example of the greedy technique?",
    options: [
      "A. Dijkstra's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Floyd-Warshall algorithm",
      "D. Prim's algorithm",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
];
