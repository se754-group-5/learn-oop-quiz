# OOP Quiz Backend

## API Endpoints

### GET /api/quizzes/oop-basics
Returns the beginner OOP quiz without correct answers.

### POST /api/quizzes/oop-basics/submissions
Submits answers and returns a submission summary.

Example request body:
```
{
  "userId": "student001",
  "answers": [
    { "questionId": "q1", "selectedOptionId": "A" },
    { "questionId": "q2", "selectedOptionId": "B" },
    { "questionId": "q3", "selectedOptionId": "B" },
    { "questionId": "q4", "selectedOptionId": "A" },
    { "questionId": "q5", "selectedOptionId": "A" }
  ]
}
```

### GET /api/submissions/:submissionId/result
Returns the full submission result.

Example response body:
```
{
  "submissionId": "sub-001",
  "quizId": "oop-basics",
  "userId": "student001",
  "score": 80,
  "passed": true,
  "totalQuestions": 5,
  "correctAnswers": 4,
  "weakTopics": ["inheritance"],
  "feedback": "Good work. You understand most OOP basics.",
  "recommendation": {
    "type": "review",
    "targetTopic": "inheritance",
    "message": "Try the inheritance practice task next."
  }
}
```
