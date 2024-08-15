let questions = [
  {
    question: "What is the fundamental definition of a matrix?",
    options: [
      "A. A set of linear equations.",
      "B. A rectangular array of elements arranged in rows and columns.",
      "C. A mathematical tool for performing calculus.",
      "D. A type of computer program.",
    ],
    answer: "B",
  },
  {
    question: "What does the notation  𝑎𝑖𝑗 typically represent in a matrix?",
    options: [
      "A. The element in the ith row and jth column.",
      "B. The sum of elements in the ith row.",
      "C. The product of elements in the jth column.",
      "D. The determinant of a submatrix.",
    ],
    answer: "A",
  },
  {
    question: "How is the size of a matrix typically defined?",
    options: [
      "A. By the sum of its rows and columns.",
      "B. By the number of rows multiplied by the number of columns.",
      "C. By the largest element in the matrix.",
      "D. By the difference between its rows and columns.",
    ],
    answer: "B",
  },
  {
    question: "What distinguishes a vector from other types of matrices?",
    options: [
      "A. Vectors can only contain whole numbers.",
      "B. Vectors have only one row or one column.",
      "C. Vectors are always square.",
      "D. Vectors cannot be multiplied.",
    ],
    answer: "B",
  },
  {
    question: "What characterizes a square matrix?",
    options: [
      "A. It has an equal number of rows and columns.",
      "B. All its elements are equal.",
      "C. It can only be multiplied by itself.",
      "D. Its determinant is always zero.",
    ],
    answer: "A",
  },
  {
    question: "In matrix terms, what is the 'major diagonal'?",
    options: [
      "A. The row with the largest sum.",
      "B. The column with the largest product.",
      "C. The line of elements from the top left to the bottom right.",
      "D. The elements surrounding a specific element.",
    ],
    answer: "C",
  },
  {
    question: "What is the defining feature of a diagonal matrix?",
    options: [
      "A. All elements are zero except those on the major diagonal.",
      "B. It's always a 2x2 matrix.",
      "C. It can only contain fractions.",
      "D. Its elements form an arithmetic sequence.",
    ],
    answer: "A",
  },
  {
    question: "Which statement accurately describes an identity matrix?",
    options: [
      "A. A diagonal matrix with all elements equal to one.",
      "B. A matrix with alternating ones and zeros.",
      "C. A matrix with all elements equal to zero.",
      "D. A matrix whose inverse doesn't exist.",
    ],
    answer: "A",
  },
  {
    question: "What distinguishes an upper triangular matrix?",
    options: [
      "A. It has zeros below its major diagonal.",
      "B. It has zeros above its major diagonal.",
      "C. It has zeros on its major diagonal.",
      "D. It's always larger than a lower triangular matrix.",
    ],
    answer: "A",
  },
  {
    question: "How is a lower triangular matrix defined?",
    options: [
      "A. All elements above the major diagonal are zeros.",
      "B. All elements below the major diagonal are zeros.",
      "C. All elements on the major diagonal are zeros.",
      "D. The elements below the major diagonal are fractions.",
    ],
    answer: "A",
  },
  {
    question: "What characterizes a tridiagonal matrix?",
    options: [
      "A. Only elements on the major diagonal and its two adjacent diagonals can be non-zero.",
      "B. It's always a 3x3 matrix.",
      "C. It has three distinct values for its elements.",
      "D. It only has non-zero elements in three rows.",
    ],
    answer: "A",
  },
  {
    question: "How would you describe a banded matrix?",
    options: [
      "A. It has non-zero elements only along specific diagonals.",
      "B. It forms a visual band of numbers.",
      "C. It alternates between positive and negative numbers.",
      "D. It has a 'band' of identical elements.",
    ],
    answer: "A",
  },
  {
    question: "What is the relationship between a matrix and its transpose?",
    options: [
      "A. The transpose is obtained by interchanging the rows and columns of the original matrix.",
      "B. The transpose is the inverse of the original matrix.",
      "C. The transpose is obtained by negating each element in the original matrix.",
      "D. The transpose is found by squaring each element in the original matrix.",
    ],
    answer: "A",
  },
  {
    question: "What defines a symmetric square matrix?",
    options: [
      "A. Its elements are symmetrical about the major diagonal.",
      "B. All its elements are identical.",
      "C. It is equal to its own inverse.",
      "D. It has an even number of rows and columns.",
    ],
    answer: "A",
  },
  {
    question: "What is meant by the term 'sparse matrix'?",
    options: [
      "A. A matrix primarily populated with zeros.",
      "B. A matrix with very few elements overall.",
      "C. A matrix with widely spaced elements.",
      "D. A matrix with very small element values.",
    ],
    answer: "A",
  },
  {
    question: "When is a matrix considered 'diagonally dominant'?",
    options: [
      "A. The absolute value of each diagonal element is greater than or equal to the sum of the absolute values of the other elements in its row.",
      "B. All diagonal elements are equal.",
      "C. The diagonal elements are all positive numbers.",
      "D. The sum of the diagonal elements is greater than the sum of all other elements.",
    ],
    answer: "A",
  },
  {
    question: "Which operation is NOT typically part of matrix algebra?",
    options: [
      "A. Addition",
      "B. Subtraction",
      "C. Multiplication",
      "D. Division",
    ],
    answer: "D",
  },
  {
    question: "How is the addition or subtraction of matrices performed?",
    options: [
      "A. By performing the operation on corresponding elements of matrices with the same size.",
      "B. By multiplying all elements in one matrix by the corresponding elements in the other.",
      "C. By adding or subtracting all elements in each matrix.",
      "D. Addition and subtraction are not defined for matrices.",
    ],
    answer: "A",
  },
  {
    question: "What does it mean for matrix addition to be associative?",
    options: [
      "A. (A + B) + C = A + (B + C)",
      "B. A + B = B + A",
      "C. A + 0 = A",
      "D. A + (-A) = 0",
    ],
    answer: "A",
  },
  {
    question:
      "What property allows for the order of matrices to be switched during addition without changing the result?",
    options: [
      "A. Commutativity",
      "B. Associativity",
      "C. Distributivity",
      "D. Invertibility",
    ],
    answer: "A",
  },
  {
    question: "How is matrix multiplication performed?",
    options: [
      "A. By multiplying corresponding elements.",
      "B. By sum-product of row elements of the first matrix and column elements of the second matrix.",
      "C. By finding the average of all elements in both matrices.",
      "D. By taking the difference of corresponding elements.",
    ],
    answer: "B",
  },
  {
    question: "What condition must be met for two matrices to be multiplied?",
    options: [
      "A. They must have the same number of rows.",
      "B. They must have the same number of columns.",
      "C. The number of columns in the first matrix must equal the number of rows in the second matrix.",
      "D. They must both be square matrices.",
    ],
    answer: "C",
  },
  {
    question: "What is the term for matrices that can be multiplied?",
    options: [
      "A. Compatible",
      "B. Conformable",
      "C. Corresponding",
      "D. Consistent",
    ],
    answer: "B",
  },
  {
    question: "What happens when a matrix is multiplied by a scalar?",
    options: [
      "A. Each element in the matrix is multiplied by the scalar.",
      "B. The scalar is added to each element in the matrix.",
      "C. Only the diagonal elements are affected.",
      "D. The size of the matrix changes.",
    ],
    answer: "A",
  },
  {
    question: "Are square matrices always commutative under multiplication?",
    options: ["A. Yes", "B. No"],
    answer: "B",
  },
  {
    question: "What does the distributive property of matrices state?",
    options: [
      "A. A(B + C) = AB + AC",
      "B. AB = BA",
      "C. (AB)C = A(BC)",
      "D. A(BC) = (AC)B",
    ],
    answer: "A",
  },
  {
    question:
      "What condition defines the inverse of a matrix A, denoted as A⁻¹?",
    options: [
      "A. A + A⁻¹ = I",
      "B. AA⁻¹ = I",
      "C. A - A⁻¹ = I",
      "D. A / A⁻¹ = I",
    ],
    answer: "B",
  },
  {
    question: "Do matrix inverses commute under multiplication?",
    options: ["A. Yes", "B. No"],
    answer: "A",
  },
  {
    question: "What is matrix factorization?",
    options: [
      "A. Finding the prime factors of a matrix.",
      "B. Expressing a matrix as the product of two or more matrices.",
      "C. Reducing a matrix to its simplest form.",
      "D. Dividing a matrix into smaller submatrices.",
    ],
    answer: "B",
  },
  {
    question: "Is matrix factorization a unique process?",
    options: ["A. Yes", "B. No"],
    answer: "B",
  },
  {
    question: "What does LU factorization involve?",
    options: [
      "A. Decomposing a square matrix into the product of a lower and an upper triangular matrix.",
      "B. Finding the eigenvalues and eigenvectors of a matrix.",
      "C. Calculating the determinant of a large matrix.",
      "D. Solving a system of linear equations graphically.",
    ],
    answer: "A",
  },
  {
    question:
      "What is the compact matrix notation for a system of linear algebraic equations?",
    options: ["A. A + x = b", "B. Ax = b", "C. x / A = b", "D. b - A = x"],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a row operation used in solving linear equations?",
    options: [
      "A. Scaling (multiplying a row by a constant)",
      "B. Pivoting (interchanging rows)",
      "C. Inversion (finding the inverse of a row)",
      "D. Elimination (using linear combinations of rows)",
    ],
    answer: "C",
  },
  {
    question: "What does the determinant of a square matrix represent?",
    options: [
      "A. The sum of its elements.",
      "B. A scalar value calculated from its elements.",
      "C. The number of rows divided by the number of columns.",
      "D. The product of its diagonal elements.",
    ],
    answer: "B",
  },
  {
    question: "How is the determinant of a 2x2 matrix calculated?",
    options: [
      "A. Product of major diagonal elements minus product of minor diagonal elements.",
      "B. Sum of all elements.",
      "C. Product of all elements.",
      "D. Difference between the sums of the first and second rows.",
    ],
    answer: "A",
  },
  {
    question:
      "What is the method called when evaluating a determinant using minors?",
    options: [
      "A. Gaussian Elimination",
      "B. LU Decomposition",
      "C. Expansion by Minors (Method of Cofactors)",
      "D. Cramer's Rule",
    ],
    answer: "C",
  },
  {
    question: "What does a determinant of zero indicate about a matrix?",
    options: [
      "A. The matrix is invertible.",
      "B. The matrix is symmetric.",
      "C. The matrix is singular.",
      "D. The matrix is diagonal.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the determinant of a triangular matrix (upper or lower) equal to?",
    options: [
      "A. Zero",
      "B. One",
      "C. The sum of its diagonal elements.",
      "D. The product of its diagonal elements.",
    ],
    answer: "D",
  },
  {
    question:
      "What type of system benefits from the use of the Thomas Algorithm?",
    options: [
      "A. Any system with a large number of equations",
      "B. Systems with a tridiagonal pattern in the coefficient matrix",
      "C. Systems where the coefficient matrix is an identity matrix",
      "D. Systems with non-linear equations",
    ],
    answer: "B",
  },
  {
    question: "Why is the Thomas Algorithm considered efficient?",
    options: [
      "A. It uses complex mathematical formulas.",
      "B. It is specifically designed for general matrices.",
      "C. It minimizes computations involving zero elements in tridiagonal systems.",
      "D. It relies on random sampling to approximate the solution.",
    ],
    answer: "C",
  },
  {
    question:
      "How does the Thomas Algorithm approach the elimination of elements in a tridiagonal matrix?",
    options: [
      "A. It eliminates all elements in each row iteratively.",
      "B. It focuses on eliminating elements above and below the diagonal in each step.",
      "C. It only eliminates elements in the first and last rows.",
      "D. It uses the determinant to eliminate specific rows and columns.",
    ],
    answer: "B",
  },
  {
    question:
      "In the context of the Thomas Algorithm, what is an elimination multiplier?",
    options: [
      "A. A random number used to scale equations.",
      "B. The factor used to eliminate an element during Gaussian elimination.",
      "C. The determinant of a submatrix within the tridiagonal matrix.",
      "D. A value used to check the convergence of the algorithm.",
    ],
    answer: "B",
  },
  {
    question:
      "How can a tridiagonal matrix 'T' be stored efficiently, and what is the role of the matrix 'A' in this storage?",
    options: [
      "A. 'T' is stored as a 3x3 matrix, with 'A' representing the inverse.",
      "B. 'T' is stored as an nx3 matrix 'A', reducing storage of unnecessary zero elements.",
      "C. 'T' is stored as a single vector, with 'A' representing the diagonal.",
      "D. 'T' is stored in its original form; 'A' is not relevant.",
    ],
    answer: "B",
  },
  {
    question:
      "Why is pivoting generally avoided when using the Thomas Algorithm?",
    options: [
      "A. Pivoting is computationally expensive for tridiagonal matrices.",
      "B. Pivoting can disrupt the tridiagonal structure essential for the algorithm.",
      "C. Pivoting does not improve the accuracy of the solution.",
      "D. Pivoting is not a valid operation in this context.",
    ],
    answer: "B",
  },
  {
    question:
      "What are the two main pitfalls of using Gaussian elimination to solve linear algebraic equations?",
    options: [
      "A. Complex programming and slow execution speed",
      "B. Difficulty in finding an initial guess and slow convergence",
      "C. Round-off errors and ill-conditioned systems",
      "D. Memory limitations and the need for symbolic computation",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary source of round-off errors in numerical computations?",
    options: [
      "A. Using iterative methods instead of direct methods",
      "B. Representing infinite precision numbers with finite precision in computers",
      "C. Using low-level programming languages",
      "D. Human errors in inputting data",
    ],
    answer: "B",
  },
  {
    question:
      "How can the impact of round-off errors be minimized in numerical computations?",
    options: [
      "A. By avoiding the use of computers altogether",
      "B. By using high-precision arithmetic and employing pivoting strategies",
      "C. By rounding all numbers to the nearest integer",
      "D. By using symbolic computation instead of numerical computation",
    ],
    answer: "B",
  },
  {
    question:
      "What characterizes a well-conditioned problem in numerical analysis?",
    options: [
      "A. Small changes in the input lead to small changes in the output.",
      "B. The problem has a unique solution.",
      "C. The problem can be solved using only integer calculations.",
      "D. The solution does not involve fractions or decimals.",
    ],
    answer: "A",
  },
  {
    question: "What is a key characteristic of an ill-conditioned problem?",
    options: [
      "A. It cannot be solved numerically.",
      "B. Small changes in the input can lead to significant changes in the output.",
      "C. It always involves complex numbers.",
      "D. It can only be solved using iterative methods.",
    ],
    answer: "B",
  },
  {
    question:
      "Why are ill-conditioned systems particularly susceptible to round-off errors?",
    options: [
      "A. They are inherently more complex to solve.",
      "B. They often have an infinite number of solutions.",
      "C. Their sensitivity to input changes amplifies the impact of round-off errors.",
      "D. They typically involve a larger number of equations.",
    ],
    answer: "C",
  },
  {
    question: "What is a reliable indicator of ill-conditioning in a matrix?",
    options: [
      "A. A large determinant",
      "B. A small condition number",
      "C. A large condition number",
      "D. A symmetric structure",
    ],
    answer: "C",
  },
  {
    question:
      "What is the purpose of calculating the norm of a matrix, vector, or scalar in numerical analysis?",
    options: [
      "A. To determine the computational complexity of an algorithm",
      "B. To quantize the size, length, or magnitude of the entity",
      "C. To check if a matrix is invertible",
      "D. To find the eigenvalues of a matrix",
    ],
    answer: "B",
  },
  {
    question:
      "What does the Euclidean norm of a vector represent geometrically?",
    options: [
      "A. The projection of the vector onto the x-axis",
      "B. The area of the parallelogram determined by the vector and one of the axes",
      "C. The length of the vector in n-dimensional space",
      "D. The angle between the vector and the x-axis",
    ],
    answer: "C",
  },
  {
    question:
      "How is the condition number of a matrix related to the sensitivity of a linear system?",
    options: [
      "A. A higher condition number indicates lower sensitivity to input changes.",
      "B. The condition number is not related to the sensitivity of the system.",
      "C. A higher condition number indicates greater sensitivity to input changes.",
      "D. A lower condition number indicates greater sensitivity to input changes.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the main goal of using iterative improvement in the context of solving linear systems?",
    options: [
      "A. To find an exact solution without any round-off error",
      "B. To reduce the number of equations in the system",
      "C. To further minimize the impact of round-off errors after using direct methods",
      "D. To avoid the need for pivoting",
    ],
    answer: "C",
  },
  {
    question:
      "When are iterative methods typically preferred over direct methods for solving large systems of linear equations?",
    options: [
      "A. When the coefficient matrix is dense",
      "B. When an exact solution is required",
      "C. When the coefficient matrix is sparse and diagonally dominant",
      "D. When the system is ill-conditioned",
    ],
    answer: "C",
  },
  {
    question:
      "What key factor influences the convergence rate of iterative methods for linear systems?",
    options: [
      "A. The programming language used",
      "B. The size of the computer's memory",
      "C. The diagonal dominance of the coefficient matrix",
      "D. The initial guess for the solution",
    ],
    answer: "C",
  },
  {
    question:
      "In the Jacobi iteration method, how is each component of the solution vector updated?",
    options: [
      "A. By using the most recently computed values for all other components",
      "B. By solving each equation for one component, using values from the previous iteration",
      "C. By simultaneously solving all equations",
      "D. By randomly assigning values to each component",
    ],
    answer: "B",
  },
  {
    question:
      "What is the residual in the context of iterative methods for solving linear systems?",
    options: [
      "A. The difference between the approximate solution and the exact solution",
      "B. The value obtained when the approximate solution is substituted back into the original equations",
      "C. The error introduced by using finite precision arithmetic",
      "D. The difference between consecutive iterations of the solution",
    ],
    answer: "B",
  },
  {
    question: "How does the Gauss-Seidel method differ from the Jacobi method?",
    options: [
      "A. Gauss-Seidel uses the most recently computed values for all components in each calculation.",
      "B. Gauss-Seidel only updates one component of the solution vector per iteration.",
      "C. Gauss-Seidel does not require an initial guess for the solution.",
      "D. Gauss-Seidel is only applicable to tridiagonal systems.",
    ],
    answer: "A",
  },
  {
    question:
      "Which iterative method is generally expected to converge faster: Jacobi or Gauss-Seidel?",
    options: [
      "A. Jacobi",
      "B. Gauss-Seidel",
      "C. They converge at the same rate.",
      "D. It depends on the specific system of equations.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the role of the relaxation factor (ω) in the Successive Over-Relaxation (SOR) method?",
    options: [
      "A. It controls the step size of the iterative process.",
      "B. It determines the convergence criterion.",
      "C. It scales the residual term, potentially accelerating convergence.",
      "D. It introduces randomness into the iteration.",
    ],
    answer: "C",
  },
  {
    question:
      "What happens in the SOR method when the relaxation factor (ω) is equal to 1?",
    options: [
      "A. The method becomes equivalent to the Jacobi method.",
      "B. The method becomes equivalent to the Gauss-Seidel method.",
      "C. The method diverges.",
      "D. The method oscillates indefinitely.",
    ],
    answer: "B",
  },
  {
    question:
      "What values of the relaxation factor (ω) typically lead to over-relaxation in the SOR method?",
    options: ["A. ω < 0", "B. 0 < ω < 1", "C. 1 < ω < 2", "D. ω > 2"],
    answer: "C",
  },
  {
    question:
      "When is under-relaxation (ω < 1) typically employed in the SOR method?",
    options: [
      "A. When the Gauss-Seidel method converges too slowly",
      "B. When the Gauss-Seidel method causes the solution to overshoot the target",
      "C. When the system of equations is ill-conditioned",
      "D. When high accuracy is not required",
    ],
    answer: "B",
  },
  {
    question:
      "What distinguishes a homogenous system of linear equations from a non-homogenous one?",
    options: [
      "A. A homogenous system has a non-zero vector on the right side of the equation.",
      "B. A homogenous system always has a unique solution.",
      "C. A homogenous system has the zero vector on the right side of the equation.",
      "D. A homogenous system cannot be solved using Cramer's rule.",
    ],
    answer: "C",
  },
  {
    question:
      "Under what condition does a homogenous system of linear equations have a non-trivial solution?",
    options: [
      "A. When the determinant of the coefficient matrix is non-zero.",
      "B. When the determinant of the coefficient matrix is zero.",
      "C. When the system is non-linear.",
      "D. When the system has more equations than unknowns.",
    ],
    answer: "B",
  },
  {
    question: "In the context of eigenproblems, what are eigenvalues?",
    options: [
      "A. The solutions for the unknowns in a homogenous system.",
      "B. The elements of the coefficient matrix.",
      "C. The constants on the right-hand side of the equation.",
      "D. Specific values of a scalar that make the determinant of a matrix equal to zero.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the fundamental principle behind the power method for finding eigenvalues?",
    options: [
      "A. Directly solving the characteristic polynomial.",
      "B. Repeatedly multiplying a trial eigenvector by the matrix and scaling.",
      "C. Inverting the coefficient matrix and finding its determinant.",
      "D. Using Gaussian elimination to transform the matrix into upper triangular form.",
    ],
    answer: "B",
  },
  {
    question:
      "In the direct power method, what is the significance of the 'unity component' in the eigenvector?",
    options: [
      "A. It ensures that all components of the eigenvector sum up to one.",
      "B. It is used for scaling the resulting vector after each iteration.",
      "C. It represents the eigenvalue corresponding to that eigenvector.",
      "D. It determines the convergence rate of the method.",
    ],
    answer: "B",
  },
  {
    question:
      "What happens to the power method if the largest eigenvalue is not distinct (i.e., has the same magnitude as another eigenvalue)?",
    options: [
      "A. The method converges faster.",
      "B. The method converges to the average of the two eigenvalues.",
      "C. The method fails to converge.",
      "D. The method converges to a random eigenvector.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary purpose of scaling the vector in each iteration of the power method?",
    options: [
      "A. To prevent numerical overflow or underflow.",
      "B. To speed up the convergence rate.",
      "C. To simplify the calculations.",
      "D. To ensure that the eigenvectors remain orthogonal.",
    ],
    answer: "A",
  },
  {
    question:
      "How does the inverse power method differ from the direct power method?",
    options: [
      "A. It finds the smallest eigenvalue instead of the largest.",
      "B. It uses the inverse of the coefficient matrix.",
      "C. It requires an initial guess for the eigenvalue.",
      "D. Both A and B",
    ],
    answer: "D",
  },
  {
    question:
      "In practice, how is the inverse matrix typically handled in the inverse power method?",
    options: [
      "A. The inverse matrix is explicitly calculated.",
      "B. The LU decomposition method is used to solve the system without direct inversion.",
      "C. The inverse is approximated using a Taylor series expansion.",
      "D. The inverse is not needed in the inverse power method.",
    ],
    answer: "B",
  },
  {
    question:
      "What is a key limitation of both the direct and inverse power methods?",
    options: [
      "A. They can only find one eigenvalue and eigenvector at a time.",
      "B. They require prior knowledge of the eigenvalues.",
      "C. They are computationally expensive for large matrices.",
      "D. They are not applicable to non-linear eigenproblems.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the basic approach of the direct method for solving eigenproblems?",
    options: [
      "A. Iterative multiplication and scaling of eigenvectors.",
      "B. Finding the roots of the characteristic equation.",
      "C. Decomposing the matrix into lower and upper triangular matrices.",
      "D. Transforming the matrix into its Jordan canonical form.",
    ],
    answer: "B",
  },
  {
    question:
      "After finding the eigenvalues using the direct method, how are the corresponding eigenvectors typically determined?",
    options: [
      "A. By substituting the eigenvalues back into the original equation and solving the resulting system.",
      "B. By applying the power method using the calculated eigenvalue.",
      "C. By calculating the inverse of the coefficient matrix.",
      "D. The direct method automatically provides both eigenvalues and eigenvectors.",
    ],
    answer: "A",
  },
  {
    question:
      "What is a key limitation of the power method and the direct method for finding eigenvalues?",
    options: [
      "A. They are only suitable for very small matrices.",
      "B. They primarily focus on finding individual eigenvalues, not the entire spectrum.",
      "C. They always require an initial guess for the eigenvalue.",
      "D. They cannot handle matrices with complex numbers.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary advantage of the QR method over the power and direct methods?",
    options: [
      "A. It is simpler to understand conceptually.",
      "B. It is computationally less expensive.",
      "C. It can simultaneously find all the eigenvalues of a matrix.",
      "D. It guarantees convergence for any matrix.",
    ],
    answer: "C",
  },
  {
    question:
      "Why are triangular matrices important in understanding the QR method?",
    options: [
      "A. Their determinants are easy to calculate, which is essential for the QR method.",
      "B. They form the basis for the Gram-Schmidt orthogonalization process.",
      "C. Their eigenvalues are readily identifiable as the elements on their main diagonal.",
      "D. They are easier to invert, which is crucial for finding eigenvectors.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the role of similarity transformations in the QR method?",
    options: [
      "A. To reduce a matrix to its row echelon form.",
      "B. To transform a matrix into a triangular form while preserving its eigenvalues.",
      "C. To calculate the determinant of a matrix.",
      "D. To find the inverse of a matrix.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the objective of the Gram-Schmidt process within the QR method?",
    options: [
      "A. To solve a system of linear equations.",
      "B. To find the eigenvalues of a matrix directly.",
      "C. To factorize a matrix into orthogonal (Q) and upper triangular (R) matrices.",
      "D. To reduce the condition number of a matrix.",
    ],
    answer: "C",
  },
  {
    question: "What is meant by an orthonormal set of vectors?",
    options: [
      "A. A set of vectors that are all linearly independent.",
      "B. A set of vectors that all have unit length.",
      "C. A set of vectors that are mutually orthogonal and each have unit length.",
      "D. A set of vectors that form the columns of a diagonal matrix.",
    ],
    answer: "C",
  },
  {
    question:
      "In the QR method, how is the upper triangular matrix 'R' constructed?",
    options: [
      "A. By directly copying the upper triangular part of the original matrix 'A'.",
      "B. By calculating the inverse of matrix 'Q'.",
      "C. By using dot products of the orthonormal vectors in 'Q' with the original column vectors of 'A'.",
      "D. By randomly assigning values to its elements.",
    ],
    answer: "C",
  },
  {
    question:
      "Why is the QR factorization process iteratively repeated in the QR method?",
    options: [
      "A. To ensure that the resulting matrix converges to a diagonal matrix.",
      "B. To progressively refine the approximation of the eigenvalues.",
      "C. To reduce the impact of round-off errors.",
      "D. To orthogonalize the eigenvectors of the matrix.",
    ],
    answer: "B",
  },
  {
    question:
      "What are two common modifications used to enhance the efficiency of the QR method?",
    options: [
      "A. Using the power method to find an initial eigenvalue estimate and scaling the matrix by its determinant.",
      "B. Preprocessing the matrix to make it closer to a triangular form and shifting the eigenvalues during iterations.",
      "C. Inverting the matrix and using the Jacobi iteration method.",
      "D. Applying the Gram-Schmidt process multiple times before starting the QR iterations.",
    ],
    answer: "B",
  },
  {
    question:
      "If a method, like the QR method, finds only the eigenvalues, how are the corresponding eigenvectors usually determined?",
    options: [
      "A. By solving the original eigenproblem (Ax = λx) directly using Gaussian elimination.",
      "B. By applying the inverse power method to the matrix shifted by the corresponding eigenvalue.",
      "C. By taking the transpose of the original matrix 'A'.",
      "D. Eigenvectors cannot be found if a method only yields eigenvalues.",
    ],
    answer: "B",
  },
  {
    question:
      "What are the two main phases involved in finding the roots of a non-linear equation?",
    options: [
      "A. Defining the equation and plotting its graph",
      "B. Bounding the solution and refining the solution",
      "C. Calculating the derivative and finding the integral",
      "D. Converting the equation to a linear form and solving using matrices",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary goal of 'bounding the solution' in root-finding algorithms?",
    options: [
      "A. To find the exact root of the equation",
      "B. To obtain a rough estimate of the root's location",
      "C. To determine the number of roots the equation has",
      "D. To check if the equation has any real roots",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a common technique for bounding the solution of a non-linear equation?",
    options: [
      "A. Graphing the function",
      "B. Incremental search",
      "C. Using past experience or similar problems",
      "D. Directly applying Newton's method",
    ],
    answer: "D",
  },
  {
    question:
      "Why is graphing a useful technique for bounding the solution of a non-linear equation?",
    options: [
      "A. It provides a precise value for the root.",
      "B. It reveals the general behavior of the function and helps identify potential issues.",
      "C. It determines the convergence rate of iterative methods.",
      "D. It calculates the derivative of the function.",
    ],
    answer: "B",
  },
  {
    question:
      "How does an incremental search help bound the solution of a non-linear equation?",
    options: [
      "A. By evaluating the function at regular intervals to detect sign changes, indicating a root's presence.",
      "B. By repeatedly halving the interval containing the root.",
      "C. By approximating the function with a linear equation.",
      "D. By finding the derivative of the function and setting it to zero.",
    ],
    answer: "A",
  },
  {
    question:
      "What is the key requirement for the initial approximation when using iterative methods to refine a solution?",
    options: [
      "A. It must be randomly chosen.",
      "B. It must be the exact root of the equation.",
      "C. It must be sufficiently close to the true root to ensure convergence.",
      "D. It must be a negative number.",
    ],
    answer: "C",
  },
  {
    question:
      "What is a fundamental difference between 'closed domain' (bracketing) methods and 'open domain' methods?",
    options: [
      "A. Bracketing methods are only applicable to linear equations.",
      "B. Bracketing methods always guarantee convergence, while open domain methods might diverge.",
      "C. Open domain methods require an initial guess, while bracketing methods do not.",
      "D. Open domain methods are always faster than bracketing methods.",
    ],
    answer: "B",
  },
  {
    question: "How does the interval halving (bisection) method work?",
    options: [
      "A. It repeatedly approximates the root as the average of the interval bounds.",
      "B. It finds the root by drawing a line between two points on the function's curve.",
      "C. It uses the derivative of the function to iteratively approach the root.",
      "D. It rearranges the equation to the form x = g(x) and finds the fixed point.",
    ],
    answer: "A",
  },
  {
    question: "What is a key advantage of the interval halving method?",
    options: [
      "A. It's the fastest method for finding roots.",
      "B. It guarantees convergence as the root remains trapped within a shrinking interval.",
      "C. It does not require an initial guess.",
      "D. It can find complex roots.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the main idea behind the false position (regula falsi) method?",
    options: [
      "A. It approximates the root by repeatedly halving the interval.",
      "B. It uses the derivative of the function to find the root.",
      "C. It assumes the function is linear within an interval and finds the root of the corresponding line.",
      "D. It transforms the equation into the form x = g(x) and finds the fixed point.",
    ],
    answer: "C",
  },
  {
    question: "What is the core principle of the fixed-point iteration method?",
    options: [
      "A. It directly solves the equation f(x) = 0.",
      "B. It uses a tangent line to approximate the function and find the root.",
      "C. It rewrites the equation as x = g(x) and iteratively seeks a value where x equals g(x).",
      "D. It interpolates the function with a polynomial and finds its roots.",
    ],
    answer: "C",
  },
  {
    question: "What makes Newton's method a powerful root-finding technique?",
    options: [
      "A. It always converges, regardless of the initial guess.",
      "B. It's the simplest method to understand and implement.",
      "C. It converges quadratically, meaning it can find the root quickly.",
      "D. It doesn't require calculating the derivative of the function.",
    ],
    answer: "C",
  },
  {
    question: "What is the main drawback of Newton's method?",
    options: [
      "A. It often converges to a wrong root.",
      "B. It requires evaluating the derivative of the function, which may be difficult or costly.",
      "C. It is very slow to converge.",
      "D. It is not applicable to polynomial equations.",
    ],
    answer: "B",
  },
  {
    question: "When is the secant method preferred over Newton's method?",
    options: [
      "A. When the derivative of the function is easy to calculate.",
      "B. When the derivative of the function is unavailable or expensive to compute.",
      "C. When a very high accuracy is required.",
      "D. When the function is linear.",
    ],
    answer: "B",
  },
  {
    question: "What is the geometric interpretation of the secant method?",
    options: [
      "A. It uses a tangent line to approximate the function.",
      "B. It approximates the function with a line passing through two points on the curve.",
      "C. It finds the root by repeatedly halving the interval containing it.",
      "D. It transforms the equation into a fixed-point problem.",
    ],
    answer: "B",
  },
  {
    question: "What is a polynomial in mathematics?",
    options: [
      "A. An equation with a single variable raised to the power of 1.",
      "B. An expression consisting of variables and coefficients, involving only addition and subtraction.",
      "C. An equation involving trigonometric functions like sine and cosine.",
      "D. An expression with variables raised to non-negative integer powers and combined using addition, subtraction, and multiplication.",
    ],
    answer: "D",
  },
  {
    question:
      "What does the fundamental theorem of algebra state about an nth-degree polynomial?",
    options: [
      "A. It has at most n real roots.",
      "B. It has exactly n roots, which may be real or complex.",
      "C. It always has at least one real root.",
      "D. It can be factored into n linear expressions.",
    ],
    answer: "B",
  },
  {
    question: "What is the purpose of the quadratic formula?",
    options: [
      "A. To find the roots of a cubic equation.",
      "B. To calculate the derivative of a quadratic function.",
      "C. To determine the roots of a quadratic equation.",
      "D. To factorize a quadratic expression into linear terms.",
    ],
    answer: "C",
  },
  {
    question: "When does the quadratic formula yield complex conjugate roots?",
    options: [
      "A. When the discriminant (b² - 4ac) is positive.",
      "B. When the discriminant (b² - 4ac) is zero.",
      "C. When the discriminant (b² - 4ac) is negative.",
      "D. When all coefficients (a, b, c) are positive.",
    ],
    answer: "C",
  },
  {
    question:
      "What is Descartes' rule of signs used for in the context of polynomials?",
    options: [
      "A. To find the exact values of the roots.",
      "B. To determine the number of positive and negative real roots a polynomial might have.",
      "C. To calculate the derivative of a polynomial.",
      "D. To check if a polynomial has complex roots.",
    ],
    answer: "B",
  },
  {
    question:
      "What does it mean for a high-degree polynomial to be ill-conditioned?",
    options: [
      "A. Small changes in its coefficients can lead to significant changes in its roots.",
      "B. It has a very large number of roots.",
      "C. Its roots are all complex numbers.",
      "D. It cannot be solved using numerical methods.",
    ],
    answer: "A",
  },
  {
    question: "What is polynomial deflation in the context of root-finding?",
    options: [
      "A. Reducing the degree of a polynomial by dividing it by a known linear factor.",
      "B. Finding the derivative of a polynomial.",
      "C. Approximating a polynomial with a linear function.",
      "D. Solving a polynomial equation using the quadratic formula.",
    ],
    answer: "A",
  },
  {
    question:
      "What is a key advantage of using polynomial deflation when finding multiple roots?",
    options: [
      "A. It avoids converging to the same root multiple times.",
      "B. It eliminates the need for initial guesses.",
      "C. It significantly speeds up the convergence rate.",
      "D. It guarantees that all roots will be real numbers.",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following methods is NOT directly applicable to finding complex roots of polynomials?",
    options: [
      "A. Newton's method",
      "B. The secant method",
      "C. The interval halving (bisection) method",
      "D. Bairstow's method",
    ],
    answer: "C",
  },
  {
    question:
      "What is a major challenge when dealing with multiple roots in a polynomial?",
    options: [
      "A. Iterative methods might not converge at all.",
      "B. The convergence rate of Newton's method becomes very slow.",
      "C. It's difficult to determine the multiplicity of the root in advance.",
      "D. Polynomial deflation cannot be applied in this case.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the purpose of using modified Newton's methods for multiple roots?",
    options: [
      "A. To simplify the polynomial equation.",
      "B. To avoid the need for calculating derivatives.",
      "C. To restore the faster (quadratic) convergence rate of Newton's method.",
      "D. To transform the problem into a system of linear equations.",
    ],
    answer: "C",
  },
  {
    question:
      "How can Newton's method and the secant method be adapted to find complex roots?",
    options: [
      "A. By using complex arithmetic and complex initial guesses.",
      "B. By converting the polynomial into polar coordinates.",
      "C. By using only the real parts of the complex numbers involved.",
      "D. Complex roots cannot be found using these methods.",
    ],
    answer: "A",
  },
  {
    question:
      "What is the main challenge in solving systems of non-linear equations compared to single equations?",
    options: [
      "A. Systems of non-linear equations always have a unique solution.",
      "B. The number of solutions is unknown beforehand, and visualization becomes more difficult.",
      "C. All methods for single equations directly extend to systems of equations.",
      "D. Systems of non-linear equations always have only real solutions.",
    ],
    answer: "B",
  },
  {
    question:
      "Which root-finding method is readily extended to solve systems of non-linear equations?",
    options: [
      "A. Interval halving (bisection)",
      "B. Fixed-point iteration",
      "C. Newton's method",
      "D. None of the above",
    ],
    answer: "C",
  },
  {
    question:
      "How is Newton's method adapted for systems of non-linear equations?",
    options: [
      "A. It uses a single-variable Taylor series expansion.",
      "B. It solves the system directly using matrix inversion.",
      "C. It employs a multi-variable Taylor series expansion and solves a system of linear equations in each iteration.",
      "D. It converts the system into a single non-linear equation.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following statements is NOT true about the Thomas Algorithm?",
    options: [
      "A. It is a specialized method for solving systems of linear equations with tridiagonal coefficient matrices.",
      "B. It is generally more efficient in terms of computational time and storage than standard Gaussian elimination for tridiagonal systems.",
      "C. It relies heavily on pivoting to ensure stability and accuracy.",
      "D. It can be considered a form of LU factorization.",
    ],
    answer: "C",
  },
  {
    question:
      "When applying the Thomas Algorithm, what happens to the elements in the original coefficient matrix?",
    options: [
      "A. All elements are modified during the elimination process.",
      "B. Only the elements on the major diagonal are directly affected.",
      "C. Only the elements on the subdiagonal and superdiagonal are modified.",
      "D.  The matrix is transformed into its inverse.",
    ],
    answer: "B",
  },
  {
    question: "Why is pivoting typically avoided in the Thomas Algorithm?",
    options: [
      "A. Pivoting is computationally very expensive for tridiagonal systems.",
      "B. Pivoting is unnecessary because the algorithm is inherently stable.",
      "C. Pivoting can disrupt the tridiagonal structure that the algorithm relies on.",
      "D. Pivoting would introduce complex numbers, making the algorithm more complicated.",
    ],
    answer: "C",
  },
  {
    question:
      "You are solving a linear system using Gaussian elimination and encounter a zero on the major diagonal. What is the appropriate action to take?",
    options: [
      "A. Stop the algorithm, as the system has no solution.",
      "B. Replace the zero with a small, non-zero value to continue the elimination.",
      "C.  Perform a pivoting operation (row or column interchange) to obtain a non-zero pivot element.",
      "D.  Continue the elimination process, skipping the row with the zero.",
    ],
    answer: "C",
  },
  {
    question: "What is the primary purpose of scaling in Gaussian elimination?",
    options: [
      "A. To make the matrix symmetric.",
      "B. To reduce the determinant of the coefficient matrix.",
      "C. To improve computational efficiency by reducing the number of operations.",
      "D. To minimize round-off errors by selecting a suitable pivot element during the elimination process.",
    ],
    answer: "D",
  },
  {
    question:
      "Which statement best describes the difference between Gauss elimination and Gauss-Jordan elimination?",
    options: [
      "A. Gauss elimination finds the determinant, while Gauss-Jordan finds the inverse.",
      "B. Gauss elimination transforms the matrix into upper triangular form, while Gauss-Jordan transforms it into diagonal or identity form.",
      "C. Gauss elimination is an iterative method, while Gauss-Jordan is a direct method.",
      "D. Gauss elimination is more accurate than Gauss-Jordan due to fewer operations.",
    ],
    answer: "B",
  },
  {
    question:
      "You are attempting to solve a linear system using Gaussian elimination, but after applying the algorithm, the transformed right-hand side vector contains all zeros. What does this indicate about the original system?",
    options: [
      "A. The system has a unique solution, which is the zero vector.",
      "B. The system is inconsistent and has no solution.",
      "C. The system has infinitely many solutions.",
      "D. The coefficient matrix is singular.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the relationship between the determinant of a matrix and its invertibility?",
    options: [
      "A. A matrix is invertible only if its determinant is zero.",
      "B. The determinant of a matrix equals the sum of its eigenvalues, and if this sum is non-zero, the matrix is invertible.",
      "C.  A matrix is invertible if and only if its determinant is non-zero.",
      "D.  The determinant and invertibility of a matrix are unrelated concepts.",
    ],
    answer: "C",
  },
  {
    question:
      "You are comparing two methods for solving a linear system: Gaussian elimination and the matrix inverse method. Which of the following is a key advantage of using Gaussian elimination?",
    options: [
      "A. It is always computationally faster than finding the inverse.",
      "B. It is more numerically stable, especially for ill-conditioned systems.",
      "C. It can be used even if the coefficient matrix is singular.",
      "D.  It directly provides the eigenvalues of the coefficient matrix.",
    ],
    answer: "B",
  },
  {
    question:
      "What does LU factorization achieve in the context of solving linear systems?",
    options: [
      "A. It finds the eigenvalues and eigenvectors of the coefficient matrix.",
      "B. It decomposes the coefficient matrix into a product of lower (L) and upper (U) triangular matrices, simplifying the solution process.",
      "C.  It calculates the determinant of the coefficient matrix.",
      "D.  It transforms the system into a non-linear system that can be solved iteratively.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following LU factorization methods is characterized by having unity elements on the main diagonal of the lower triangular matrix (L)?",
    options: [
      "A. Crout's method",
      "B. Doolittle's method",
      "C.  Cholesky decomposition",
      "D.  QR decomposition",
    ],
    answer: "B",
  },
  {
    question:
      "How does LU factorization help reduce the computational effort when solving linear systems with multiple right-hand side vectors?",
    options: [
      "A. The factorization only needs to be performed once, and then forward/backward substitution can be efficiently used for each right-hand side.",
      "B. It reduces the original system to a single equation with one unknown.",
      "C. It eliminates the need for pivoting, making the process faster.",
      "D. It transforms the system into a homogeneous system, which is easier to solve.",
    ],
    answer: "A",
  },
  {
    question:
      "You have a large sparse matrix, and you know that it is diagonally dominant. Which type of method is generally more efficient for solving a linear system with this matrix?",
    options: [
      "A. Direct elimination methods like Gaussian elimination",
      "B. Iterative methods like Jacobi, Gauss-Seidel, or SOR",
      "C. The matrix inverse method",
      "D.  Symbolic computation methods",
    ],
    answer: "B",
  },
  {
    question:
      "What does it mean for a matrix to be diagonally dominant, and why is this property important for iterative methods?",
    options: [
      "A. All diagonal elements are equal, ensuring that the iterations converge smoothly.",
      "B.  The absolute value of each diagonal element is greater than or equal to the sum of the absolute values of the other elements in its row, promoting convergence.",
      "C. The diagonal elements are all positive, leading to faster convergence.",
      "D.  The matrix is symmetric, simplifying the calculations in iterative methods.",
    ],
    answer: "B",
  },
  {
    question:
      "You are solving a linear system using the Jacobi iteration method. How is the solution vector updated in each iteration?",
    options: [
      "A. By solving each equation for one component, using the most recently computed values for all other components.",
      "B. By solving each equation for one component, using values from the previous iteration.",
      "C. By simultaneously solving all equations using matrix inversion.",
      "D. By averaging the values of the previous two iterations.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following factors does NOT influence the convergence rate of iterative methods for solving linear systems?",
    options: [
      "A. The degree of diagonal dominance in the coefficient matrix",
      "B. The choice of the initial solution vector",
      "C.  The size of the matrix (number of rows and columns)",
      "D. The specific iterative method used (Jacobi, Gauss-Seidel, SOR)",
    ],
    answer: "C",
  },
  {
    question:
      "What is the 'residual' in the context of iterative methods, and how is it used to assess convergence?",
    options: [
      "A. It is the difference between the approximate solution at the current iteration and the exact solution.",
      "B. It is the value obtained when substituting the current approximate solution back into the original equations.",
      "C.  It is the change in the solution vector between consecutive iterations.",
      "D.  It is the determinant of the coefficient matrix at the current iteration.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the key distinction between the Jacobi iteration method and the Gauss-Seidel method?",
    options: [
      "A. Jacobi updates all components of the solution vector simultaneously, while Gauss-Seidel updates them one at a time.",
      "B. Gauss-Seidel uses the most recently computed values for all components in each calculation, while Jacobi uses values from the previous iteration.",
      "C. Jacobi is guaranteed to converge for any linear system, while Gauss-Seidel might diverge.",
      "D. Gauss-Seidel can be applied to non-linear systems, while Jacobi is limited to linear systems.",
    ],
    answer: "B",
  },
  {
    question:
      "In general, which of the following iterative methods is expected to converge faster for solving a diagonally dominant linear system?",
    options: [
      "A. Jacobi",
      "B. Gauss-Seidel",
      "C. They converge at the same rate.",
      "D.  The convergence rate depends solely on the initial guess, not the method.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the role of the relaxation factor (ω) in the Successive Over-Relaxation (SOR) method?",
    options: [
      "A. It determines the stopping criterion for the iterations.",
      "B. It scales the residual term, influencing the convergence rate.",
      "C.  It is used to select the pivot element in each iteration.",
      "D.  It controls the step size of the updates to the solution vector.",
    ],
    answer: "B",
  },
  {
    question:
      "What happens in the SOR method if the relaxation factor (ω) is set to 1?",
    options: [
      "A. The method becomes equivalent to the Jacobi method.",
      "B. The method becomes equivalent to the Gauss-Seidel method.",
      "C. The method will always diverge.",
      "D.  The solution will oscillate indefinitely.",
    ],
    answer: "B",
  },
  {
    question:
      "When is over-relaxation (1 < ω < 2) typically applied in the SOR method?",
    options: [
      "A. When the Gauss-Seidel method is converging too slowly.",
      "B. When the system of equations is ill-conditioned.",
      "C. When a very high accuracy is not required.",
      "D.  When the coefficient matrix is not diagonally dominant.",
    ],
    answer: "A",
  },
  {
    question:
      "Under what circumstances might under-relaxation (ω < 1) be beneficial in the SOR method?",
    options: [
      "A. When the Gauss-Seidel method converges very quickly.",
      "B. When the Gauss-Seidel method leads to oscillations or overshooting of the solution.",
      "C. When the coefficient matrix is nearly singular.",
      "D. When the initial guess is very far from the true solution.",
    ],
    answer: "B",
  },
  {
    question:
      "You are trying to solve a system of linear equations using the SOR method, but the solution diverges. What is the most likely reason for this divergence?",
    options: [
      "A. The relaxation factor (ω) is too small (under-relaxation).",
      "B. The coefficient matrix is not diagonally dominant.",
      "C.  The relaxation factor (ω) is greater than or equal to 2.",
      "D.  The initial solution vector was poorly chosen.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the relationship between a homogenous system of linear equations and an eigenproblem?",
    options: [
      "A. Eigenproblems are a specific type of homogenous system where the right-hand side is a scalar multiple of the solution vector.",
      "B.  Homogenous systems always have non-trivial solutions, just like eigenproblems.",
      "C.  Eigenproblems are not related to homogenous systems; they deal with finding roots of non-linear equations.",
      "D.  Homogenous systems can be solved using the power method, which is also used for eigenproblems.",
    ],
    answer: "A",
  },
  {
    question: "In the context of eigenproblems, what are eigenvalues?",
    options: [
      "A. The solutions for the unknown variables in a system of linear equations.",
      "B. The elements on the main diagonal of a matrix.",
      "C. Scalar values that, when subtracted from the diagonal elements of a matrix, make the determinant of the resulting matrix equal to zero.",
      "D.  The coefficients of the characteristic polynomial of a matrix.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the fundamental principle behind the power method for finding eigenvalues?",
    options: [
      "A. It directly solves the characteristic polynomial of a matrix.",
      "B. It repeatedly multiplies a trial vector by the matrix, scaling the result in each iteration, causing it to converge towards the dominant eigenvector and its corresponding eigenvalue.",
      "C.  It calculates the inverse of the matrix and finds its eigenvalues.",
      "D.  It decomposes the matrix into lower and upper triangular matrices using LU factorization.",
    ],
    answer: "B",
  },
  {
    question:
      "In the direct power method, why is it necessary to scale the resulting vector after each multiplication by the matrix?",
    options: [
      "A. To make the calculations easier.",
      "B. To ensure that the components of the vector remain within a reasonable numerical range, preventing overflow or underflow.",
      "C.  To force the vector to converge to the eigenvector with the smallest magnitude.",
      "D.  To maintain the orthogonality of the eigenvectors.",
    ],
    answer: "B",
  },
  {
    question:
      "What condition must be met for the direct power method to converge effectively to the dominant eigenvalue?",
    options: [
      "A. The matrix must be symmetric.",
      "B. The matrix must be diagonally dominant.",
      "C.  The dominant eigenvalue must be significantly larger in magnitude than the other eigenvalues.",
      "D.  The initial guess for the eigenvector must be very close to the true dominant eigenvector.",
    ],
    answer: "C",
  },
  {
    question:
      "What happens in the power method if the two largest eigenvalues of a matrix have the same magnitude?",
    options: [
      "A. The method converges faster.",
      "B. The method converges to the average of the two eigenvalues.",
      "C.  The method fails to converge to a single eigenvalue.",
      "D.  The method converges to a random eigenvector.",
    ],
    answer: "C",
  },
  {
    question:
      "How does the inverse power method differ from the direct power method?",
    options: [
      "A. It finds the eigenvalue closest to a given target value, while the direct method finds the largest eigenvalue.",
      "B. It finds the smallest eigenvalue (in magnitude) by applying the power method to the inverse of the matrix.",
      "C.  It does not require scaling the resulting vector in each iteration.",
      "D.  It only works for symmetric matrices.",
    ],
    answer: "B",
  },
  {
    question:
      "In practice, how is the inverse matrix typically handled in the inverse power method?",
    options: [
      "A. The inverse matrix is explicitly calculated using Gaussian elimination.",
      "B. The LU decomposition of the original matrix is used to solve systems of equations efficiently, avoiding direct inversion.",
      "C.  The inverse is approximated using an iterative method like Jacobi or Gauss-Seidel.",
      "D. The inverse power method does not require the inverse matrix; it only needs the eigenvalues.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following statements about the direct method for solving eigenproblems is true?",
    options: [
      "A. It is the most efficient method for finding all eigenvalues of large matrices.",
      "B. It finds eigenvalues by directly solving the characteristic equation, which can be computationally expensive for high-degree polynomials.",
      "C.  It automatically provides both eigenvalues and eigenvectors.",
      "D.  It is primarily used for finding complex eigenvalues.",
    ],
    answer: "B",
  },
  {
    question:
      "After using the direct method to find the eigenvalues of a matrix, how are the corresponding eigenvectors typically determined?",
    options: [
      "A. The direct method automatically provides the eigenvectors along with the eigenvalues.",
      "B. The eigenvectors are found by substituting each eigenvalue back into the original eigenproblem (Ax = λx) and solving the resulting system.",
      "C. The eigenvectors are determined by applying the power method to the original matrix.",
      "D. The eigenvectors are simply the columns of the matrix.",
    ],
    answer: "B",
  },
  {
    question:
      "You are using Newton's method to find the root of a non-linear equation, and you notice that the iterations are converging very slowly. What could be a possible explanation for this slow convergence?",
    options: [
      "A. The initial guess is too far from the true root.",
      "B. The function has a multiple root at the solution.",
      "C.  The function is highly oscillatory near the root.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the key difference between the interval halving (bisection) method and the false position (regula falsi) method?",
    options: [
      "A. Bisection requires an initial guess, while false position does not.",
      "B. False position uses a linear approximation of the function within the interval, while bisection always chooses the midpoint.",
      "C.  Bisection guarantees convergence, while false position might diverge.",
      "D.  False position can find complex roots, while bisection cannot.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following root-finding methods is generally considered the most computationally efficient when the derivative of the function is readily available?",
    options: [
      "A. Interval halving",
      "B. False position",
      "C.  Fixed-point iteration",
      "D.  Newton's method",
    ],
    answer: "D",
  },
  {
    question:
      "What is a significant disadvantage of Newton's method compared to bracketing methods (like bisection or false position)?",
    options: [
      "A. Newton's method is much slower to converge.",
      "B. Newton's method can only find real roots, not complex roots.",
      "C.  Newton's method requires the derivative of the function, which might not be available or easy to calculate.",
      "D. Newton's method always requires two initial guesses, while bracketing methods only need one.",
    ],
    answer: "C",
  },
  {
    question:
      "Under what circumstances is the secant method preferred over Newton's method for finding the root of a non-linear equation?",
    options: [
      "A. When a high degree of accuracy is required.",
      "B. When the function is very close to linear near the root.",
      "C.  When the derivative of the function is difficult or expensive to compute.",
      "D.  When the initial guess is very close to the true root.",
    ],
    answer: "C",
  },
  {
    question: "What is the geometric interpretation of the secant method?",
    options: [
      "A. It uses a tangent line to approximate the function at each iteration.",
      "B. It approximates the function with a secant line passing through two points on the curve, finding the root of this line as the next approximation.",
      "C.  It repeatedly halves the interval containing the root.",
      "D.  It converts the non-linear equation into a fixed-point problem (x = g(x)).",
    ],
    answer: "B",
  },
  {
    question:
      "You are trying to find the root of a non-linear equation using an open domain method (like Newton's or the secant method), but the iterations diverge. What is the most likely cause of this divergence?",
    options: [
      "A. The function has a multiple root at the solution.",
      "B. The initial guess is too far from the true root, leading the iterations away from the solution.",
      "C. The function is discontinuous near the root.",
      "D.  The method was implemented incorrectly.",
    ],
    answer: "B",
  },
  {
    question:
      "What does it mean for a numerical problem to be 'ill-conditioned'?",
    options: [
      "A. Small changes in the input data can lead to large changes in the output or solution.",
      "B. The problem is very complex and difficult to solve.",
      "C.  The problem has no solution.",
      "D.  The problem has multiple solutions.",
    ],
    answer: "A",
  },
  {
    question: "How does ill-conditioning affect root-finding methods?",
    options: [
      "A. Ill-conditioning makes it difficult to find an initial guess close to the true root.",
      "B. Ill-conditioning can amplify the effects of round-off errors, making the solutions less accurate.",
      "C.  Ill-conditioned problems often have multiple roots close together, making convergence difficult.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a commonly used technique to mitigate the effects of round-off errors in numerical methods?",
    options: [
      "A. Using lower-precision arithmetic to speed up calculations.",
      "B.  Employing pivoting strategies in Gaussian elimination.",
      "C.  Using iterative methods instead of direct methods.",
      "D.  Ignoring small values in the calculations.",
    ],
    answer: "B",
  },
  {
    question:
      "You are solving a system of linear equations using a direct method and want to assess the condition of the system. Which of the following would be a suitable indicator of ill-conditioning?",
    options: [
      "A. A small determinant of the coefficient matrix",
      "B. A large condition number of the coefficient matrix",
      "C.  A large number of iterations required for an iterative method to converge",
      "D.  All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "What is the purpose of 'iterative improvement' in the context of solving linear systems?",
    options: [
      "A. To find a more accurate solution by iteratively refining an initial solution obtained from a direct method.",
      "B.  To speed up the convergence of iterative methods like Jacobi or Gauss-Seidel.",
      "C.  To reduce the condition number of the system.",
      "D.  To avoid the need for pivoting in Gaussian elimination.",
    ],
    answer: "A",
  },
  {
    question:
      "You are solving a linear system Ax = b using a direct method and obtain an approximate solution x'. How would you calculate the residual vector, which is used in iterative improvement?",
    options: [
      "A. Residual = x' - x (where x is the exact solution)",
      "B. Residual = b - Ax'",
      "C.  Residual = A⁻¹b - x'",
      "D.  Residual = det(A) * (b - Ax')",
    ],
    answer: "B",
  },
  {
    question:
      "The QR method is a powerful technique for finding eigenvalues. What is its key advantage over the power method or the direct method?",
    options: [
      "A. It is computationally less expensive.",
      "B.  It can find all the eigenvalues of a matrix simultaneously.",
      "C.  It guarantees convergence for any matrix.",
      "D.  It is easier to understand and implement.",
    ],
    answer: "B",
  },
  {
    question: "What is the role of the Gram-Schmidt process in the QR method?",
    options: [
      "A. To find the determinant of the matrix.",
      "B. To decompose the matrix into a product of orthogonal (Q) and upper triangular (R) matrices.",
      "C. To solve the system of linear equations associated with the eigenproblem.",
      "D. To reduce the matrix to its row echelon form.",
    ],
    answer: "B",
  },
  {
    question:
      "Why are triangular matrices important in understanding the QR method?",
    options: [
      "A. Their eigenvalues are the reciprocals of their diagonal elements.",
      "B.  Their eigenvalues are easily found by calculating the determinant.",
      "C.  Their eigenvalues are directly visible on their main diagonal.",
      "D.  They always have real eigenvalues.",
    ],
    answer: "C",
  },
  {
    question:
      "In the QR method, what is the relationship between the original matrix (A) and the matrices Q and R?",
    options: [
      "A. A = QR, where Q is orthogonal and R is upper triangular.",
      "B. A = RQ, where R is upper triangular and Q is orthogonal.",
      "C.  A = Q⁻¹R, where Q is orthogonal and R is upper triangular.",
      "D. A = R⁻¹Q, where R is upper triangular and Q is orthogonal.",
    ],
    answer: "A",
  },
  {
    question:
      "Why are the factors Q and R reversed (RQ) in each iteration of the QR method?",
    options: [
      "A. To obtain a new matrix that is similar to the original matrix (A), preserving eigenvalues.",
      "B. To improve the numerical stability of the algorithm.",
      "C.  To make the iterations converge faster.",
      "D.  To orthogonalize the eigenvectors of the matrix.",
    ],
    answer: "A",
  },
  {
    question:
      "The QR method primarily focuses on finding eigenvalues. How are the corresponding eigenvectors typically determined after finding the eigenvalues?",
    options: [
      "A. By applying the power method to the original matrix using each eigenvalue as an initial guess.",
      "B.  By calculating the inverse of the matrix and multiplying it by each eigenvalue.",
      "C. By substituting each eigenvalue back into the original eigenproblem (Ax = λx) and solving the resulting system.",
      "D.  By finding the null space of the matrix (A - λI) for each eigenvalue λ.",
    ],
    answer: "C",
  },
  {
    question:
      "What is a potential advantage of using the QR method with shifting?",
    options: [
      "A. It avoids the need for the Gram-Schmidt process.",
      "B.  It can accelerate convergence by targeting specific eigenvalues.",
      "C.  It reduces the computational complexity of the algorithm.",
      "D.  It makes the method applicable to non-linear eigenproblems.",
    ],
    answer: "B",
  },
  {
    question:
      "You are working with a large, dense matrix and need to find all of its eigenvalues.  Which method would be the least efficient choice for this task?",
    options: [
      "A. The QR method",
      "B. The power method",
      "C.  The direct method (solving the characteristic equation)",
      "D.  A method that transforms the matrix into Hessenberg form before applying QR iterations",
    ],
    answer: "B",
  },
  {
    question:
      "What does the 'fundamental theorem of algebra' state about polynomial equations?",
    options: [
      "A. Any polynomial can be factored into linear terms.",
      "B.  A polynomial of degree 'n' has exactly 'n' roots, counting multiplicities, which may be real or complex.",
      "C.  Every polynomial has at least one real root.",
      "D.  The roots of a polynomial can always be found using explicit formulas.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a valid approach to finding the roots of a polynomial equation?",
    options: [
      "A. Using the quadratic formula for second-degree polynomials.",
      "B.  Applying iterative methods like Newton's method or the secant method.",
      "C.  Using the interval halving (bisection) method directly on the polynomial.",
      "D.  Finding roots one at a time and using polynomial deflation to reduce the degree.",
    ],
    answer: "C",
  },
  {
    question:
      "Descartes' rule of signs provides information about the roots of a polynomial. What specific information does it give?",
    options: [
      "A. The exact values of the real roots.",
      "B.  The number of positive and negative real roots a polynomial with real coefficients might have.",
      "C.  The multiplicity of each root.",
      "D.  Whether the polynomial has any complex roots.",
    ],
    answer: "B",
  },
  {
    question:
      "You are attempting to find the roots of a high-degree polynomial using Newton's method. You notice that the iterations are oscillating around a particular value without converging. What is the most likely explanation?",
    options: [
      "A. The polynomial is ill-conditioned.",
      "B.  The initial guess is too far from the root.",
      "C.  The polynomial has a multiple root at that value.",
      "D.  Newton's method is not suitable for finding the roots of polynomials.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the main purpose of using polynomial deflation when finding multiple roots?",
    options: [
      "A. To reduce the computational complexity of finding subsequent roots.",
      "B.  To improve the accuracy of the calculated roots.",
      "C.  To avoid converging to the same root multiple times.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question: "What is a potential drawback of using polynomial deflation?",
    options: [
      "A. It can only be used with bracketing methods, not open domain methods.",
      "B. It significantly slows down the root-finding process.",
      "C.  Errors in the previously found roots can propagate to the coefficients of the deflated polynomial, affecting subsequent roots.",
      "D.  It can only find real roots; it cannot find complex roots.",
    ],
    answer: "C",
  },
  {
    question:
      "Why is it generally recommended to find the last two roots of a deflated polynomial using the quadratic formula rather than continuing with an iterative method?",
    options: [
      "A. The quadratic formula is always more accurate than iterative methods.",
      "B.  Iterative methods cannot be applied to quadratic equations.",
      "C.  The coefficients of the deflated quadratic polynomial might contain accumulated errors, making further deflation less reliable.",
      "D.  The quadratic formula is computationally faster for finding the last two roots.",
    ],
    answer: "C",
  },
  {
    question:
      "What is a key challenge in solving systems of non-linear equations compared to solving single non-linear equations?",
    options: [
      "A. Systems of non-linear equations always have only one solution.",
      "B.  It is more difficult to visualize the problem and determine the number of solutions.",
      "C.  All root-finding methods for single equations can be directly applied to systems of equations.",
      "D.  Systems of non-linear equations can only be solved using iterative methods; no direct methods exist.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following root-finding methods is commonly extended to solve systems of non-linear equations?",
    options: [
      "A. Interval halving (bisection)",
      "B.  Fixed-point iteration",
      "C.  Newton's method",
      "D.  None of the above",
    ],
    answer: "C",
  },
  {
    question:
      "How is Newton's method adapted to solve a system of non-linear equations?",
    options: [
      "A. It uses a single-variable Taylor series expansion, applying Newton's method to each equation separately.",
      "B.  It directly solves the system using matrix inversion.",
      "C.  It employs a multi-variable Taylor series expansion, approximating the system with a linear system that is solved in each iteration.",
      "D.  It converts the system into a single non-linear equation with multiple variables.",
    ],
    answer: "C",
  },
  {
    question:
      "You are solving a system of non-linear equations using Newton's method. In each iteration, what type of system of equations needs to be solved to determine the updates to the solution vector?",
    options: [
      "A. A non-linear system of equations",
      "B.  A linear system of equations",
      "C.  A single non-linear equation",
      "D.  A single linear equation",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the Jacobian matrix in the context of solving systems of non-linear equations using Newton's method?",
    options: [
      "A. It is the coefficient matrix of the linearized system of equations in each iteration.",
      "B.  It is the matrix of partial derivatives of the non-linear functions with respect to the unknown variables.",
      "C.  It represents the Hessian matrix of the system.",
      "D.  Both A and B.",
    ],
    answer: "D",
  },
  {
    question:
      "You are trying to find all the roots of a polynomial with real coefficients. You suspect that some roots might be complex. Which of the following methods would NOT be suitable for this task?",
    options: [
      "A. Newton's method with complex arithmetic",
      "B.  The secant method with complex arithmetic",
      "C.  The interval halving (bisection) method",
      "D.  Bairstow's method for finding quadratic factors",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary reason that bracketing methods (like interval halving or false position) cannot be used to find complex roots of polynomials?",
    options: [
      "A. These methods rely on sign changes in the function, which do not occur for complex roots.",
      "B.  They are too computationally expensive for complex numbers.",
      "C.  They always converge to real roots, even if complex roots exist.",
      "D.  They require the derivative of the polynomial, which is undefined for complex values.",
    ],
    answer: "A",
  },
  {
    question:
      "Why is it important to be mindful of ill-conditioning when solving both linear and non-linear systems of equations?",
    options: [
      "A. Ill-conditioning makes it impossible to find a solution using numerical methods.",
      "B.  Ill-conditioning can lead to solutions that are highly sensitive to small changes in the input data, making them less reliable.",
      "C.  Ill-conditioned systems always have an infinite number of solutions.",
      "D.  Ill-conditioning indicates that the equations are not independent.",
    ],
    answer: "B",
  },
  {
    question:
      "You are trying to solve a non-linear equation using Newton's method, but the iterations keep cycling through a few values without converging or diverging. What is a possible explanation for this behavior?",
    options: [
      "A. The function has a root with very high multiplicity.",
      "B.  The initial guess is trapped in a local minimum or maximum of the function.",
      "C.  The derivative of the function is zero at the points where the iterations are cycling.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "You are comparing the efficiency of different root-finding methods. Which factor would generally favor using an open domain method (like Newton's or the secant method) over a bracketing method (like interval halving or false position)?",
    options: [
      "A. When a guaranteed convergence is required.",
      "B.  When the derivative of the function is readily available and computationally inexpensive.",
      "C.  When the function has multiple roots close together.",
      "D.  When a very high accuracy is not crucial.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the main purpose of using a convergence criterion in iterative methods?",
    options: [
      "A. To determine the maximum number of iterations allowed.",
      "B.  To specify a condition for stopping the iterations when a desired level of accuracy or convergence is reached.",
      "C.  To check if the method is converging to the correct solution.",
      "D.  To avoid exceeding the computational resources available.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is a common type of convergence criterion used in root-finding algorithms?",
    options: [
      "A. The absolute difference between consecutive iterates is below a threshold.",
      "B.  The absolute value of the function at the current iterate is below a threshold.",
      "C.  The relative difference between consecutive iterates is below a threshold.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the main difference between absolute error and relative error in numerical calculations?",
    options: [
      "A. Absolute error is always smaller than relative error.",
      "B.  Relative error takes into account the magnitude of the true value, while absolute error does not.",
      "C.  Absolute error is used for iterative methods, while relative error is used for direct methods.",
      "D.  Absolute error is measured in the same units as the quantity being calculated, while relative error is dimensionless.",
    ],
    answer: "B",
  },
  {
    question:
      "You are solving a linear system Ax = b and want to measure the sensitivity of the solution to changes in the right-hand side vector (b). What is a suitable metric for this sensitivity?",
    options: [
      "A. The determinant of matrix A",
      "B.  The condition number of matrix A",
      "C.  The number of iterations required for an iterative method to converge",
      "D.  The spectral radius of matrix A",
    ],
    answer: "B",
  },
  {
    question:
      "What is the relationship between the norm of a vector and its magnitude?",
    options: [
      "A. The norm is the square of the magnitude.",
      "B.  The norm is a generalization of the concept of magnitude, providing a way to measure the 'size' of a vector or matrix.",
      "C.  The norm and magnitude are unrelated concepts.",
      "D.  The norm is only defined for vectors in two or three dimensions.",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is NOT a commonly used norm for vectors?",
    options: [
      "A. The Euclidean norm (L2 norm)",
      "B. The maximum norm (L∞ norm)",
      "C.  The sum of absolute values norm (L1 norm)",
      "D.  The determinant norm",
    ],
    answer: "D",
  },
  {
    question:
      "You are working with a matrix and need to choose a norm to measure its 'size.' Which norm would emphasize the largest element in the matrix?",
    options: [
      "A. The maximum row sum norm",
      "B.  The maximum column sum norm",
      "C.  The Frobenius norm",
      "D.  The spectral norm",
    ],
    answer: "A",
  },
  {
    question:
      "What is the condition number of a matrix in terms of its norms, and what does a large condition number indicate?",
    options: [
      "A. Condition number = ||A|| * ||A⁻¹||, indicating that the matrix is ill-conditioned.",
      "B.  Condition number = ||A|| / ||A⁻¹||, indicating that the matrix is well-conditioned.",
      "C.  Condition number = det(A), indicating that the matrix is singular.",
      "D.  Condition number = trace(A), indicating the sum of the eigenvalues.",
    ],
    answer: "A",
  },
  {
    question:
      "You are solving an eigenproblem Ax = λx.  What is the characteristic equation for this problem, and what is its significance?",
    options: [
      "A. det(A - λI) = 0; its roots are the eigenvalues (λ) of matrix A.",
      "B.  (A - λI)x = 0; it defines a system of linear equations to solve for the eigenvectors.",
      "C.  λ = trace(A); it gives the sum of the eigenvalues.",
      "D.  λ = det(A); it gives the product of the eigenvalues.",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following statements is true regarding finding eigenvectors using the inverse power method after the eigenvalues have been determined?",
    options: [
      "A. The inverse power method is not suitable for finding eigenvectors; it only finds eigenvalues.",
      "B.  The inverse power method can be applied to the shifted matrix (A - λI) to find the eigenvector corresponding to eigenvalue λ.",
      "C.  The eigenvectors are directly obtained from the QR decomposition of the matrix.",
      "D.  The eigenvectors are simply the rows of the inverse matrix.",
    ],
    answer: "B",
  },
  {
    question:
      "You are using an iterative method to solve a linear system, and you want to ensure that the solution has converged to a high degree of accuracy. What is a suitable approach to achieve this?",
    options: [
      "A. Use a very small tolerance value in the convergence criterion.",
      "B.  Perform a large number of iterations, even if the solution seems to have stabilized.",
      "C.  Use a method with a faster convergence rate, like Gauss-Seidel or SOR.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "What is a key consideration when choosing a root-finding method for a particular non-linear equation?",
    options: [
      "A. The availability of the derivative of the function",
      "B.  The expected number of roots",
      "C.  The computational cost of evaluating the function",
      "D.  All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "You are tasked with finding the roots of a polynomial, and you know that some roots might be repeated (multiplicity greater than one). Which variation of Newton's method would be most appropriate for this situation?",
    options: [
      "A. The standard Newton's method, as it handles multiple roots without modification.",
      "B.  Newton's method with a modified formula that incorporates the multiplicity of the root.",
      "C.  Newton's method applied to the function u(x) = f(x) / f'(x)",
      "D.  Both B and C",
    ],
    answer: "D",
  },
  {
    question:
      "Why is it sometimes challenging to identify the presence of multiple roots when visually inspecting the graph of a function?",
    options: [
      "A. Multiple roots always appear as a single point on the graph.",
      "B. The function might have a flat region or inflection point near a multiple root, making it difficult to distinguish visually.",
      "C.  Multiple roots only occur for polynomial functions, which are difficult to graph accurately.",
      "D.  Graphical methods cannot be used to find multiple roots.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the main reason for preprocessing a matrix into a nearly triangular form before applying the QR method for eigenvalue calculation?",
    options: [
      "A. To reduce the computational cost of the QR iterations.",
      "B.  To make the matrix diagonally dominant.",
      "C.  To eliminate the need for the Gram-Schmidt process.",
      "D.  To ensure that all eigenvalues are real numbers.",
    ],
    answer: "A",
  },
  {
    question:
      "Why are the eigenvectors of a matrix important in various applications?",
    options: [
      "A. They represent the principal directions of transformation or deformation associated with the matrix.",
      "B.  They form an orthonormal basis for the vector space.",
      "C.  They can be used to diagonalize the matrix, simplifying calculations.",
      "D.  All of the above.",
    ],
    answer: "D",
  },
  {
    question:
      "You are using an iterative method to solve a non-linear equation, and you notice that the iterations are converging very quickly. What does this typically indicate about the behavior of the function near the root?",
    options: [
      "A. The function is nearly linear in the vicinity of the root.",
      "B.  The function has a multiple root at the solution.",
      "C.  The initial guess was exceptionally good.",
      "D.  The function is highly oscillatory near the root.",
    ],
    answer: "A",
  },
  {
    question:
      "You need to solve a system of linear equations where the coefficient matrix is very large and sparse. You have the choice between using a direct method (like Gaussian elimination) or an iterative method (like Jacobi or Gauss-Seidel). Which statement best guides your choice?",
    options: [
      "A. Direct methods are always more efficient for large matrices.",
      "B.  Iterative methods are often more suitable for large, sparse matrices, especially if they are diagonally dominant.",
      "C.  The choice depends solely on the accuracy requirements of the solution.",
      "D.  Direct methods are preferred if the matrix is ill-conditioned.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the relationship between the eigenvalues of a matrix and its determinant?",
    options: [
      "A. The determinant is the sum of the eigenvalues.",
      "B.  The determinant is the product of the eigenvalues.",
      "C.  The eigenvalues are the square roots of the determinant.",
      "D.  The determinant and eigenvalues are unrelated concepts.",
    ],
    answer: "B",
  },
  {
    question:
      "You have successfully used the QR method to find the eigenvalues of a matrix. You now want to find the corresponding eigenvectors. Which of the following methods would be appropriate for this task?",
    options: [
      "A. Applying the inverse power method to the matrix shifted by each eigenvalue.",
      "B.  Performing a singular value decomposition (SVD) on the matrix.",
      "C.  Calculating the inverse of the matrix and multiplying it by each eigenvalue.",
      "D.  Solving the characteristic equation again for each eigenvalue.",
    ],
    answer: "A",
  },
  {
    question:
      "When solving a non-linear equation, what is the primary concern when the equation is known to be ill-conditioned?",
    options: [
      "A. The solution might not exist.",
      "B. The solution might be very sensitive to small errors in the input data or round-off errors during calculations.",
      "C.  Iterative methods will always diverge.",
      "D.  The problem can only be solved using symbolic methods, not numerical methods.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following techniques is NOT commonly used to address ill-conditioning in numerical problems?",
    options: [
      "A. Using higher-precision arithmetic",
      "B.  Employing regularization methods to stabilize the solution",
      "C.  Reformulating the problem to reduce sensitivity",
      "D.  Decreasing the number of iterations in iterative methods",
    ],
    answer: "D",
  },
  {
    question:
      "How many row operations are useful when solving a system of linear algebraic equation? Name them.",
    options: ["Placeholder - See answer"],
    answer:
      "There are three useful row operations: 1) <b>Scaling:</b> Multiplying a row by a non-zero constant, 2) <b>Pivoting:</b> Interchanging two rows, and 3) <b>Elimination:</b> Adding a multiple of one row to another row.",
  },
  {
    question:
      "What is the difference between the Doolittle and Crout method under LU factorization?",
    options: ["Placeholder - See answer"],
    answer:
      "The main difference lies in where the '1's are placed on the diagonal. In Doolittle's method, the '1's are placed on the diagonal of the lower triangular matrix (<b>L</b>), while in Crout's method, they are placed on the diagonal of the upper triangular matrix (<b>U</b>).",
  },
  {
    question:
      "Which property of a matrix denotes its original is equal to its transpose i.e. <b>A</b> = <b>A</b><sup>T</sup>?",
    options: ["Placeholder - See answer"],
    answer: "Symmetry",
  },
  {
    question: "Differentiate between a unit matrix and an Identity matrix.",
    options: ["Placeholder - See answer"],
    answer:
      "A unit matrix is a square matrix where all the diagonal elements are 1, but the off-diagonal elements can be any value. An identity matrix is a specific type of unit matrix where all off-diagonal elements are 0. The identity matrix acts like the number '1' in multiplication: <b>IA</b> = <b>AI</b> = <b>A</b>.",
  },
  {
    question:
      "Solve the system of linear equations using Gauss-Jordan elimination: 2x + y + 2z = 10, 2y + x + z = 8, 3x + y – z = 2",
    options: ["Placeholder - See answer"],
    answer: "x = 1, y = 2, z = 3",
  },
  {
    question:
      "Differentiate between a well-conditioned problem and an ill-conditioned problem.",
    options: ["Placeholder - See answer"],
    answer:
      "A well-conditioned problem is one where small changes in the input data result in small changes in the solution. An ill-conditioned problem is one where small changes in the input can lead to very large changes in the solution.",
  },
  {
    question:
      "Which of the system conditions (well-conditioned or ill-conditioned) is extremely sensitive to small changes?",
    options: ["Placeholder - See answer"],
    answer: "Ill-conditioned problems",
  },
  {
    question:
      "Round-off errors in direct elimination methods of solving systems of linear algebraic equations are reduced by using ……………………..",
    options: ["Placeholder - See answer"],
    answer: "Scaled pivoting",
  },
  {
    question:
      "Mention three iterative methods used in solving a system of linear algebraic equations.",
    options: ["Placeholder - See answer"],
    answer:
      "1. Jacobi Iteration Method, 2. Gauss-Seidel Iteration Method, 3. Successive Over-Relaxation (SOR) Method",
  },
  {
    question:
      "Which parameters are useful when defining absolute error according to the Jacobi iteration method?",
    options: ["Placeholder - See answer"],
    answer:
      "The absolute error in the Jacobi method is typically defined based on the change in the components of the solution vector between consecutive iterations (|x<sub>i</sub><sup>(k+1)</sup> - x<sub>i</sub><sup>(k)</sup>|) or the magnitude of the residual vector.",
  },
  {
    question:
      "To achieve faster convergence, which iterative method is advised?",
    options: ["Placeholder - See answer"],
    answer:
      "In general, the Gauss-Seidel method converges faster than the Jacobi method. The SOR method, with an appropriate relaxation factor, can converge even faster.",
  },
  {
    question: "With the aid of an expression, state two properties of a norm.",
    options: ["Placeholder - See answer"],
    answer:
      "Two properties of a norm ||x|| are: 1. <b>Non-negativity:</b> ||x|| ≥ 0, and 2.  <b>Scalar Multiplication:</b> ||kx|| = |k| * ||x|| for any scalar k.",
  },
  {
    question: "When do we say a system is under-relaxed?",
    options: ["Placeholder - See answer"],
    answer:
      "A system is considered under-relaxed in the SOR method when the relaxation factor (ω) is less than 1 (0 < ω < 1).",
  },
  {
    question:
      "Name the two major pitfalls in the application of Gauss elimination.",
    options: ["Placeholder - See answer"],
    answer:
      "The two main pitfalls of Gauss elimination are: 1) <b>Round-off errors</b> due to finite precision arithmetic, and 2) <b>Ill-conditioned systems</b> where small changes in the input lead to large changes in the solution.",
  },
  {
    question: "Why can’t pivoting be used with the Thomas algorithm?",
    options: ["Placeholder - See answer"],
    answer:
      "Pivoting (row or column interchanges) would disrupt the tridiagonal structure of the coefficient matrix, which is essential for the efficiency of the Thomas algorithm.",
  },
  {
    question:
      "Consider the linear eigenproblem <b>Ax</b> = λ<b>x</b> for the matrix below:<br><br><b>A</b> = <br>[1 −3 2]<br>[4 4 −1]<br>[6 3 5]<br><br>Find the numerically largest eigenvalue (λ) with its accompanying eigenvector of the matrix using the direct power method with initial guess <b>x</b><sub>0</sub><sup>T</sup> = [1 1 1].<br><br>Cue: Ending on the 4th iteration is advised.",
    options: ["Placeholder - See answer"],
    answer:
      "After 4 iterations of the power method, the largest eigenvalue (λ) is approximately 7, and its corresponding eigenvector is approximately [0.4082, 0.4082, 1].  (Note: Values may vary slightly depending on rounding.)",
  },
  {
    question:
      "Using the inverse power method, solve for the numerically smallest eigenvalue of the matrix below using an initial guess guess <b>x</b><sub>0</sub><sup>T</sup> = [1 1 1].<br><br><b>A</b> = <br>[1 2 3]<br>[0 1 4]<br>[5 6 0]<br><br>Cue: <b>A</b><sup>-1</sup><b>x</b> = (1/λ)<b>x</b> = λ<sub>inverse</sub><b>x</b>",
    options: ["Placeholder - See answer"],
    answer:
      "The smallest eigenvalue is approximately -2.3247. (Note: The eigenvector can also be determined but was not requested in the question.)",
  },
  {
    question:
      "Define the Weierstrass approximation theorem and explain its significance in polynomial approximation.",
    options: ["Placeholder - See answer"],
    answer:
      "The Weierstrass Approximation Theorem states that any continuous function on a closed interval [a, b] can be uniformly approximated as closely as desired by a polynomial function. This theorem is significant because it guarantees that we can find a polynomial that is arbitrarily close to a given continuous function over a specific interval. This is foundational for many numerical methods that use polynomials to approximate more complex functions.",
  },
  {
    question:
      "Describe the uniqueness theorem for polynomials and its implications.",
    options: ["Placeholder - See answer"],
    answer:
      "The Uniqueness Theorem for Polynomials states that a polynomial of degree 'n' is uniquely determined by its values at 'n+1' distinct points. In other words, if two polynomials of degree 'n' agree at 'n+1' different points, they must be the same polynomial. This theorem has important implications for polynomial interpolation, assuring us that there is only one polynomial of a given degree that passes through a specific set of data points.",
  },
  {
    question:
      "Explain the error term associated with polynomial approximation and its relevance in numerical methods.",
    options: ["Placeholder - See answer"],
    answer:
      "When approximating a function using a polynomial, there is usually a difference between the true function value and the polynomial approximation at any given point. This difference is called the 'error term.' The error term is relevant in numerical methods because it helps us understand the accuracy of the approximation and provides bounds on how much the polynomial might deviate from the true function. Analyzing the error term helps us choose appropriate polynomial degrees and make informed decisions about the reliability of our numerical results.",
  },
  {
    question:
      "Describe the procedure for fitting a direct fit polynomial to a set of data points.",
    options: ["Placeholder - See answer"],
    answer:
      "To fit a direct fit polynomial to a set of 'n+1' data points, you typically follow these steps: 1. <b>Choose the degree:</b>  Decide on the degree 'n' of the polynomial you want to fit. This determines the number of coefficients you need to find. 2. <b>Set up a system of equations:</b> For each data point (x<sub>i</sub>, y<sub>i</sub>), substitute the values into the general polynomial equation P(x) = a<sub>0</sub> + a<sub>1</sub>x + a<sub>2</sub>x<sup>2</sup> + ... + a<sub>n</sub>x<sup>n</sup>.  This creates a system of 'n+1' linear equations with 'n+1' unknown coefficients (a<sub>0</sub>, a<sub>1</sub>, ..., a<sub>n</sub>). 3. <b>Solve the system:</b> Solve the system of linear equations using methods like Gaussian elimination or matrix inversion to find the coefficients. 4. <b>Form the polynomial:</b> Once you have the coefficients, substitute them back into the general polynomial equation to get the specific polynomial P(x) that fits the data.",
  },
  {
    question:
      "Data points: (0,1), (1,0), (2,1), (3,4). Find the polynomial P(x) of degree 3 that fits the given data points.",
    options: ["Placeholder - See answer"],
    answer: "P(x) = 1 - 2x + x<sup>2</sup>",
  },
];

let all = { start: 0, end: questions.length - 1, name: "All" };
let lect1 = { start: 0, end: 37, name: "Lecture 1: Trivial" };
let lect2 = { start: 38, end: 64, name: "Lecture 2: Trivial" };
let lect3 = { start: 65, end: 76, name: "Lecture 3: Trivial" };
let lect4 = { start: 77, end: 86, name: "Lecture 4: Trivial" };
let lect5 = { start: 87, end: 101, name: "Lecture 5: Trivial" };
let lect6 = { start: 102, end: 116, name: "Lecture 6: Trivial" };
let notSoObvious = { start: 117, end: 210, name: "Not So Obvious" };
let groupQues = { start: 211, end: 232, name: "Group Questions" };

const lectureRanges = [
  all,
  lect1,
  lect2,
  lect3,
  lect4,
  lect5,
  lect6,
  notSoObvious,
  groupQues,
];
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill("");
let selectedQuestions = [];
let quizType = "all";

const baseUrl = "https://bbf-backend.onrender.com/api/quiz/user/";
const usernameDialog = document.getElementById("usernameDialog");
const quizContainer = document.getElementById("quizContainer");
const quizOptionsDiv = document.getElementById("quiz-options");
const lectureSelectionDiv = document.getElementById("lectureSelection");
const quizForm = document.getElementById("quizForm");
const feedbackContainer = document.getElementById("feedbackContainer");
const feedbackChoice = document.getElementById("feedbackChoice");
const resultDiv = document.getElementById("result");
const resultDiv2 = document.getElementById("result2");
const sectionTitle = document.getElementById("quiz-h1");
const retake = document.getElementById("retakeGroup");
const userScore = document.getElementById("user-answers");
const scoreContainer = document.getElementById("scoreContainer");
const resetBtn = document.getElementById("resetButton");
const questionCountSpan = document.getElementById("question-count");
const questionCountContainer = document.getElementById(
  "question-count-container"
);
let userName = "" || localStorage.getItem("username");
const usernameInput = (document.getElementById("username").value = userName);

const enterBtn = document.getElementById("enter-btn");
const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const authInput = document.getElementById("authInput");
const authUsername = document.getElementById("authInputUsername");
const authHeader = document.getElementById("auth-h2");
const authKeyText = document.getElementById("auth-key-text");
const authDiv = document.getElementById("authPage");
let authKey = "";
const pageContents = document.getElementById("pageContents");

validateUserOnLoad();

async function validateUserFromAPI() {
  try {
    userName = authUsername.value.trim().toLowerCase();
    localStorage.setItem("username", userName);
    authKey = authInput.value.trim();

    let payload = JSON.stringify({
      username: userName,
      key: authKey,
    });

    authKeyText.innerText = "Validating Auth Key";
    authHeader.innerText = "";
    authInput.style.display = "none";
    authUsername.style.display = "none";
    enterBtn.style.display = "none";
    loader.style.display = "block";

    const response = await fetch(
      "https://bbf-backend.onrender.com/api/quiz/user/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error("Authentication Error");
    }

    const data = await response.json();

    if (data.isValid) {
      authKeyText.innerText = "Auth Key Validated!";
      authHeader.innerText = "Redirecting...";
      localStorage.setItem(
        "authStatus",
        JSON.stringify({ username: userName, isAuthenticated: true })
      );
      setTimeout(() => {
        localStorage.setItem("authUser", userName);
        authDiv.style.display = "none";
        pageContents.style.display = "block";
        loader2.style.display = "none";
        document.getElementById("username").value = userName;
        startQuiz();
      }, 1000);
    } else {
      authKeyText.innerText = "Invalid Auth Key!";
      authInput.value = "";
      authHeader.innerText = "Invalid Auth Key";
    }
  } catch (error) {
    console.error("Fetch error:", error);
    authHeader.innerText = error.message;
    authKeyText.innerText = "Have an auth key?";
    authHeader.style.display = "block";
    authInput.style.display = "block";
    authUsername.style.display = "block";
    enterBtn.style.display = "block";
    loader.style.display = "none";
  }
}

enterBtn.addEventListener("click", () => {
  if (authInput.value.trim() === "") {
    alert("Please enter your auth key");
    return;
  }
  validateUserFromAPI();
});

function saveScore(score) {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ username: userName, score: score });
  localStorage.setItem("scores", JSON.stringify(scores));
}

function startQuiz() {
  const usernameInput = document.getElementById("username");
  let username = usernameInput.value.trim();

  if (username === "") {
    if (localStorage.getItem("username")) {
      username = localStorage.getItem("username");
      userName = username;
      usernameInput.value = username;
      validateUserOnLoad();
    } else {
      alert("Please enter a username");
      return;
    }
  } else {
    localStorage.setItem("username", username);
    userName = username;
  }

  const localStat = JSON.parse(localStorage.getItem("authStatus"));
  if (localStat.username === username && localStat.isAuthenticated !== !1) {
    pageContents.style.display = "block";
    authDiv.style.display = "none";
  } else {
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
    return;
  }

  validateUserOnLoad();

  if (
    username === localStorage.getItem("previousUser") &&
    localStorage.getItem("currentQuestion") !== "" &&
    JSON.parse(localStorage.getItem("userAnswers")).length > 0 &&
    JSON.parse(localStorage.getItem("selectedQuestions")).length > 0
  ) {
    userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    currentQuestion = parseInt(localStorage.getItem("currentQuestion"));
    selectedQuestions = JSON.parse(localStorage.getItem("selectedQuestions"));
    usernameDialog.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion(currentQuestion);
  } else {
    userAnswers = Array(questions.length).fill("");
    currentQuestion = 0;
    selectedQuestions = [];
    generateLectureSelection();
    usernameDialog.style.display = "none";
    quizContainer.style.display = "block";
    updateQuiz();
  }
}

async function validateUserOnLoad() {
  const usernameValue = document.getElementById("username").value.trim();
  const uDiv = document.getElementById("username");
  const uBtnFiv = document.getElementById("usernameDiv");
  const localStat = JSON.parse(localStorage.getItem("authStatus"));
  uDiv.addEventListener("input", () => {
    setTimeout(() => {
      loader2.style.display = "block";
      uDiv.style.display = "none";
      uBtnFiv.style.display = "none";
    }, 10000);
  });
  setTimeout(() => {
    loader2.style.display = "none";
    uDiv.style.display = "block";
    uBtnFiv.style.display = "flex";
  }, 10000);

  if (!localStat) {
    setTimeout(() => {
      loader2.style.display = "none";
      uDiv.style.display = "block";
      uBtnFiv.style.display = "flex";
    }, 1000);
    localStorage.setItem(
      "authStatus",
      JSON.stringify({ username: usernameValue, isAuthenticated: false })
    );
    uDiv.style.display = "block";
    uBtnFiv.style.display = "flex";
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
    return;
  }
  if (localStat.username === usernameValue && localStat.isAuthenticated) {
    return;
  } else {
    document.getElementById("username").value = "";
    usernameValue =
      document.getElementById("username").value.trim() ||
      localStorage.getItem("username");
    uDiv.style.display = "none";
    uBtnFiv.style.display = "none";
    loader2.style.display = "block";
    try {
      const response = await fetch(
        `https://bbf-backend.onrender.com/api/quiz/user/validate/${usernameValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTimeout(() => {
        loader2.style.display = "none";
        uDiv.style.display = "block";
        uBtnFiv.style.display = "flex";
      }, 1000);

      if (!data.isValid) {
        pageContents.style.display = "none";
        authDiv.style.display = "flex";

        localStorage.setItem(
          "authStatus",
          JSON.stringify({ username: usernameValue, isAuthenticated: false })
        );
      } else {
        localStorage.setItem(
          "authStatus",
          JSON.stringify({ username: usernameValue, isAuthenticated: true })
        );
        uDiv.style.display = "block";
        uBtnFiv.style.display = "flex";
        pageContents.style.display = "block";
        authDiv.style.display = "none";
        return;
      }
    } catch (error) {
      return;
    }
  }
}

if (
  JSON.parse(localStorage.getItem("authStatus")).isAuthenticated !== !undefined
) {
  const usernameValue = document.getElementById("username").value.trim();
  const authDiv = document.getElementById("authPage");
  if (usernameValue !== "n3tsh1t") {
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
  }
}

function generateLectureSelection() {
  lectureSelectionDiv.innerHTML = "";

  lectureRanges.forEach((lectureRange, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
                        <input type="checkbox" name="lectureCheckbox" value="${
                          index + 1
                        }"> Lecture ${index + 1}
                    `;

    if (index === 6) {
      const label = document.createElement("label");
      label.innerHTML = `
                        <input type="checkbox" name="lectureCheckbox" value="${
                          index + 1
                        }"> All
                    `;
    }
    lectureSelectionDiv.appendChild(label);
  });
}

function updateQuiz() {
  selectedQuestions = [];
  currentQuestion = 0;

  if (quizType === "custom") {
    const selectedLectureNumbers = Array.from(
      document.querySelectorAll('input[name="lectureCheckbox"]:checked')
    ).map((checkbox) => parseInt(checkbox.value));

    if (selectedLectureNumbers.length === 0) {
      alert("Please select at least one lecture.");
      return;
    }

    selectedLectureNumbers.forEach((lectureNumber) => {
      const lectureRange = getLectureRangeByNumber(lectureNumber);
      for (let i = lectureRange.start; i <= lectureRange.end; i++) {
        selectedQuestions.push(i);
      }
    });

    currentQuestion = document
      .querySelectorAll('input[name="lectureCheckbox"]:checked')
      .map((checkbox) => parseInt(checkbox.value))[0];
  } else {
    selectedQuestions = questions.map((_, index) => index);
  }
  updateQuestionCount();
  showQuestion(currentQuestion);
}

function getLectureRangeByNumber(number) {
  return lectureRanges[number - 1];
}

function updateQuestionCount() {
  questionCountContainer.style.background = "#430f58";
  questionCountSpan.style.color = "white";
  questionCountSpan.textContent = `Question ${currentQuestion + 1} out of ${
    selectedQuestions.length
  }`;
}

function showQuestion(index) {
  quizForm.innerHTML = "";
  const questionIndex = selectedQuestions[index];
  const question = questions[questionIndex];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("p");
  questionTitle.style.fontSize = "1rem";
  questionTitle.innerHTML = question.question;

  questionTitle.style.fontWeight = "500";
  questionTitle.style.fontSize = "1.2rem";

  questionDiv.appendChild(questionTitle);
  if (question.options.length === 1) {
    // Create an input field for the fill-in-the-blank question
    const fillInInput = document.createElement("input");
    fillInInput.type = "text";
    fillInInput.style.border = "none";
    fillInInput.style.borderBottom = "1px solid #430f58";
    fillInInput.style.outline = "none";
    fillInInput.style.fontSize = "1rem";
    fillInInput.name = "q" + (index + 1);
    fillInInput.value = userAnswers[questionIndex] || "";

    fillInInput.addEventListener("input", () => {
      console.log("input at fill in");
      userAnswers[questionIndex] = fillInInput.value.toLocaleLowerCase();
      saveProgressLocally();
    });

    questionDiv.appendChild(fillInInput);
  } else {
    question.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      const optionHint = document.createElement("img");

      optionInput.type = "radio";
      optionInput.name = "q" + (index + 1);
      optionInput.value = option[0];

      optionHint.classList.add("hint");
      optionHint.style.display = "none";
      const correctEmoji =
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.webp";
      const incorrectEmoji =
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.webp";

      optionHint.src =
        optionInput.value === questions[questionIndex].answer
          ? correctEmoji
          : incorrectEmoji;
      optionHint.alt =
        optionInput.value === questions[questionIndex].answer
          ? "correct"
          : "incorrect";

      if (userAnswers[questionIndex] === option[0]) {
        optionInput.checked = true;
      }

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));

      hinting.addEventListener("click", () => {
        optionLabel.appendChild(optionHint);
      });

      removeHinting.addEventListener("click", () => {
        optionLabel.removeChild(optionHint);
      });

      optionLabel.addEventListener("mouseover", () => {
        optionHint.style.display = "inline-block";
      });

      optionLabel.addEventListener("mouseout", () => {
        optionHint.style.display = "none";
      });
      questionDiv.appendChild(optionLabel);
      optionLabel.addEventListener("click", () => {
        userAnswers[questionIndex] = option[0];
        disableResetAfterCheckboxPress();
        saveProgressLocally();
      });
      questionDiv.appendChild(document.createElement("br"));
    });
  }

  quizForm.appendChild(questionDiv);

  document.getElementById("backButton").disabled = index === 0;
  document.getElementById("nextButton").disabled =
    index === selectedQuestions.length - 1;
  updateQuestionCount();
}

function previousQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
  saveProgressLocally();
}

function previousQuestionFromFeedBack() {
  hideFeedback();
  scoreContainer.style.display = "none";
  function start() {
    retake.style.display = "none";
    showQuestion(currentQuestion);
  }
  start();
  retake.style.display = "none";
  resultDiv.style.display = "none";
  resultDiv2.style.display = "none";
  userScore.style.display = "none";
}

function saveProgressLocally() {
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  localStorage.setItem("currentQuestion", currentQuestion);
  localStorage.setItem("selectedQuestions", JSON.stringify(selectedQuestions));
}

function saveAnswer() {
  const selectedOption = document.querySelector(
    'input[name="q' + (currentQuestion + 1) + '"]:checked'
  );
  if (selectedOption) {
    userAnswers[currentQuestion] = selectedOption.value;
  }
  saveProgressLocally();
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("previousUser", userName);
  saveProgressLocally();
  const lastUser = localStorage.getItem("authUser");
  localStorage.setItem(
    "authStatus",
    JSON.stringify({ username: lastUser, isAuthenticated: true })
  );
});

function checkAnswers() {
  saveAnswer();
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100;

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);

  //resultDiv.innerHTML = `<p>${capitalizedUsername}, you got ${score} out of ${answeredQuestions} correct! That's <span style="color: ${percentage >= 80 ? "green" : percentage <= 50 ? "yellow" : "red"};">${percentage.toFixed(2)}%</span></p>`;

  document.getElementById("quizContainer").style.display = "none";
  feedbackChoice.style.display = "contents";
}

function checkScores() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (!scores || scores.length === 0) {
    alert("You must complete a quiz first to view scores");
    return;
  }
  scoreContainer.style.display = "flex";
  scores.sort((a, b) => b.score - a.score);
  let scoreList = document.getElementById("scoreShowContainer");
  scoreList.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create header row
  const headerRow = document.createElement("tr");
  const headers = ["Quiz", "Score"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  scores.forEach((score, index) => {
    const tr = document.createElement("tr");

    const rankCell = document.createElement("td");
    rankCell.textContent = index + 1;
    tr.appendChild(rankCell);

    const scoreCell = document.createElement("td");
    scoreCell.textContent = `${score.score.toFixed(0)}%`;
    tr.appendChild(scoreCell);

    tr.style.border = "1px solid black";
    tr.style.textAlign = "center";
    tr.style.padding = "0.7rem";
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  table.style.border = "1px solid white";
  table.style.borderRadius = "10px";
  table.style.textAlign = "center";
  table.style.margin = "auto";
  table.style.backgroundColor = "#430f58";
  table.style.padding = "0.7rem";
  table.style.color = "white";
  scoreList.style.overflow = "auto";
  table.style.marginTop = "1rem";
  scoreList.appendChild(table);
}

function showFeedback() {
  retake.style.display = "block";
  retake.style.position = "relative";
  retake.style.bottom = "0";
  userScore.style.display = "flex";
  resultDiv2.style.display = "block";
  resultDiv2.style.position = "relative";
  resultDiv2.style.top = "0";
  resultDiv.style.color = "green";
  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "block";
  feedbackContainer.style.overflow = "scroll";
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  if (answeredQuestions === selectedQuestions.length) {
    saveScore(percentage);
  }

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);
  userScore.innerHTML = `<p>${capitalizedUsername}'s Score: <span style="color: ${
    percentage >= 80 ? "green" : percentage <= 50 ? "red" : "#bbdc2f"
  };">${percentage.toFixed(
    0
  )}%</span></p> <p>Done: ${answeredQuestions}</p> <p>Ans: ${score}/${
    selectedQuestions.length
  }</p>`;

  displayFeedback();
}

function showQA() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter a username");
    return;
  }
  userName = username;
  retake.style.display = "block";
  retake.style.position = "relative";
  retake.style.bottom = "0";
  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "block";
  feedbackContainer.style.overflow = "scroll";
  function displayQA() {
    feedbackContainer.style.overflow = "scroll";
    feedbackContainer.innerHTML = "";

    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("p");
      questionTitle.innerHTML = index + 1 + ". " + q.question;
      questionDiv.appendChild(questionTitle);

      // Check if the question is a fill-in-the-blank type (only one option)
      if (q.options.length === 1) {
        const correctAnswer = q.answer;

        const correctAnswerParagraph = document.createElement("p");
        correctAnswerParagraph.innerHTML = `Answer: ${correctAnswer}`;
        correctAnswerParagraph.style.color = "green";
        correctAnswerParagraph.style.fontWeight = "bold";
        correctAnswerParagraph.style.marginTop = "0.5rem";
        questionDiv.appendChild(correctAnswerParagraph);
      } else {
        // Existing logic for multiple-choice questions
        q.options.forEach((option) => {
          const optionLabel = document.createElement("label");
          const optionInput = document.createElement("input");
          optionInput.type = "radio";
          optionInput.disabled = true;

          if (option[0] === q.answer) {
            optionInput.checked = true;
            optionLabel.style.color = "green";
            optionLabel.style.fontWeight = "bold";
          }

          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(option));
          questionDiv.appendChild(optionLabel);
          questionDiv.appendChild(document.createElement("br"));
        });
      }

      feedbackContainer.appendChild(questionDiv);
    });

    document.getElementById("feedbackNextButton").disabled =
      currentQuestion === questions.length - 1;
  }

  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("usernameDialog").style.display = "none";
  displayQA();
  currentQuestion = 0;
  document.getElementById("feedbackNextButton").style.display = "none";
  document.getElementById("retakeQuizButton").textContent = "Start Quiz";
}

function showQuestionSpanChange() {
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  questionCountContainer.style.background = "#434e52";
  questionCountSpan.textContent = `Score: ${percentage.toFixed(0)}%`;
  questionCountSpan.style.color =
    percentage >= 80 ? "green" : percentage <= 50 ? "red" : "#bbdc2f";

  setTimeout(() => {
    updateQuestionCount();
  }, 1000);
}

function hideFeedback() {
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);

  //resultDiv.innerHTML = `<p>${capitalizedUsername}, you got ${score} out of ${answeredQuestions} correct! That's <span style="color: ${percentage >= 80 ? "green" : percentage <= 50 ? "yellow" : "red"};">${percentage.toFixed(2)}%</span>... ${selectedQuestions.length - currentQuestion - 1} remain</p>`;

  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "none";
  document.getElementById("quizContainer").style.display = "block";

  showQuestion(currentQuestion);
  showQuestionSpanChange();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    showQuestionSpanChange();
  }
});

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
  saveProgressLocally();
}

function displayFeedback() {
  feedbackContainer.style.overflow = "scroll";
  feedbackContainer.innerHTML = "";

  let questionsCount = currentQuestion;
  selectedQuestions
    .slice(0, questionsCount + 1)
    .forEach((questionIndex, index) => {
      const q = questions[questionIndex];
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("p");
      questionTitle.innerHTML = index + 1 + ". " + q.question;
      questionDiv.appendChild(questionTitle);

      q.options.forEach((option) => {
        // Check if the question is a fill-in-the-blank type
        if (q.options.length === 1) {
          const userAnswer = userAnswers[questionIndex];
          const correctAnswer = q.answer.toLowerCase();

          const feedbackParagraph = document.createElement("p");
          feedbackParagraph.innerHTML =
            "Your Answer: " + (userAnswer || "No answer given");

          if (
            userAnswer.toLowerCase().includes(correctAnswer.toLowerCase()) &&
            userAnswer !== ""
          ) {
            feedbackParagraph.style.color = "green";
            feedbackParagraph.style.fontWeight = "bold";
            const correctAnswerParagraph = document.createElement("p");
            correctAnswerParagraph.innerHTML =
              "Correct Answer: " + correctAnswer;
            correctAnswerParagraph.style.color = "green";
            correctAnswerParagraph.style.fontWeight = "bold";
            questionDiv.appendChild(correctAnswerParagraph);
          } else {
            feedbackParagraph.style.color = "red";
            feedbackParagraph.style.fontWeight = "bold";

            const correctAnswerParagraph = document.createElement("p");
            correctAnswerParagraph.innerHTML =
              "Correct Answer: " + correctAnswer;
            correctAnswerParagraph.style.color = "green";
            correctAnswerParagraph.style.fontWeight = "bold";
            questionDiv.appendChild(correctAnswerParagraph);
          }

          questionDiv.appendChild(feedbackParagraph);
          feedbackContainer.appendChild(questionDiv);
        } else {
          const optionLabel = document.createElement("label");
          const optionInput = document.createElement("input");
          optionInput.type = "radio";
          optionInput.disabled = true;

          if (option[0] === q.answer) {
            optionInput.checked = true;
            optionLabel.style.color = "green";
            optionLabel.style.fontWeight = "bold";
          } else if (option[0] === userAnswers[questionIndex]) {
            optionInput.checked = true;
            optionLabel.style.color = "red";
            questionTitle.style.fontWeight = "bold";
          }

          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(option));
          questionDiv.appendChild(optionLabel);
          questionDiv.appendChild(document.createElement("br"));
        }
        feedbackContainer.appendChild(questionDiv);
      });
    });

  document.getElementById("feedbackNextButton").disabled =
    currentQuestion === selectedQuestions.length - 1;
}

function nextFeedback() {
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    displayFeedback();
  }
}

function previousFeedback() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayFeedback();
  }
}

function resetQuiz() {
  const confirmRetake = confirm("Reset current Quiz?");
  if (confirmRetake) {
    currentQuestion = 0;
    userAnswers.fill("");
    document.getElementById("feedbackContainer").style.display = "none";
    retake.style.display = "none";
    resultDiv.style.display = "none";
    userScore.style.display = "none";
    resultDiv2.style.display = "none";
    scoreContainer.style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    showQuestion(currentQuestion);
  } else {
    return;
  }
}

function disableResetAfterCheckboxPress() {
  resetBtn.disabled = true;
  setTimeout(() => {
    resetBtn.disabled = false;
  }, 400);
}

function retakeQuiz() {
  const confirmRetake = confirm("Retake Quiz?");
  if (confirmRetake) {
    currentQuestion = 0;
    userAnswers.fill("");
    document.getElementById("feedbackContainer").style.display = "none";
    retake.style.display = "none";
    resultDiv.style.display = "none";
    userScore.style.display = "none";
    resultDiv2.style.display = "none";
    scoreContainer.style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    showQuestion(currentQuestion);
  } else {
    return;
  }
}

const radioButtons = document.querySelectorAll('input[name="quizType"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    quizType = radioButton.value;
    lectureSelectionDiv.style.display =
      quizType === "custom" ? "block" : "none";
    updateQuiz();
  });
});

function showLectureSelection() {
  const confirmShow = confirm(
    "Do you want to manually select lectures to be quizzed on?"
  );
  if (confirmShow) {
    document.getElementById("lectureSelectionDialog").style.display = "flex";
    generateLectureSelection();
  } else {
    return;
  }
}

function generateLectureSelection() {
  const lectureCheckboxes = document.getElementById("lectureCheckboxes");
  lectureCheckboxes.innerHTML = "";

  lectureRanges.forEach((lectureRange, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
                <input type="checkbox" name="lectureCheckbox" value="${
                  index + 1
                }"> ${lectureRange.name}
            `;
    lectureCheckboxes.appendChild(label);
  });
}

function startSelectedLectures() {
  const selectedLectureNumbers = Array.from(
    document.querySelectorAll('input[name="lectureCheckbox"]:checked')
  ).map((checkbox) => parseInt(checkbox.value));

  if (selectedLectureNumbers.length === 0) {
    alert("Please select at least one lecture.");
    return;
  }

  selectedQuestions = [];
  selectedLectureNumbers.forEach((lectureNumber) => {
    const lectureRange = getLectureRangeByNumber(lectureNumber);
    for (let i = lectureRange.start; i <= lectureRange.end; i++) {
      selectedQuestions.push(i);
    }
  });

  document.getElementById("lectureSelectionDialog").style.display = "none";
  currentQuestion = 0;

  //reset answers to prevent default filling for different lecture in range
  localStorage.setItem("userAnswers", userAnswers.fill(""));

  updateQuestionCount();
  saveProgressLocally();
  showQuestion(currentQuestion);
}
