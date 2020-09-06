# Algorithm Notes From Ada
## Overview
- An algorithm is a series of steps to solve a problem.
- Algorithms are used everyday
- An algorithm is the steps to take to complete a task. Each step can be broken down to varying degrees of preciseness
- For humans, you might not need to be as exact or precise because humans can make assumptions, however a computer needs extremely precise instructions because a computer cannot make assumptions or inferences.
## 5 Essential Properties of an Algorithm
- Donald Knuth defines an algorithm as a set of steps, or rules, with 5 basic properties: finiteness, definiteness, inputs, outputs and effectiveness.
- We writing an algorithm you must attempt to be precise as necessary to produce our intended output.
1. Input
    - An algorithm starts it computation from an initial state. This state may be expressed as input values give to the algorithm before it starts.
2. Output
    - An algorithm must produce a result with a specific relation to the inputs
3. Finiteness
    - An algorithm must start and stop. The rules an algorithm applies must also conclude in a reasonable amount of time. What "reasonable" is depends on the nature of the algorithm, but in no case can an algorithm take an infinite amount of time to complete its task. Knuth calls this property the finiteness of an algorithm.
4. Definiteness
    - The actions that an algorithm performs cannot be open to multiple interpretations; each step must be precise and unambiguous. Knuth terms this quality definiteness. An algorithm cannot iterate a "bunch" of times. The number of times must be expressed, for example 2, 1000000, or a random number.
5. Effectiveness
    - The steps an algorithm takes must be sufficiently simple that they could expressed; these steps must make sense for the quantities used.