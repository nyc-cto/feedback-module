export const ENDPOINTS = ["feedback", "userResearch", "interaction"];
export const FORM_EVENTS = {
  userResearch: {
    event_name: "future_research",
    event: "user agreed to participate in research in the future",
  },
};
export const SCREENS = {
  feedback_type: {
    title: "feedbackType.title",
    formID: "feedback",
    buttons: [
      {
        type: "form",
        text: "missing.initialBtn",
        nextScreen: "missing_info",
        feedbackID: "data1",
      },
      {
        type: "form",
        text: "broken.initialBtn",
        nextScreen: "broken",
        feedbackID: "data2",
      },
      {
        type: "form",
        text: "other.initialBtn",
        nextScreen: "other",
        feedbackID: "data3",
      },
    ],
  },
  missing_info: {
    title: "missing.title",
    checkboxes: { labels: "missing.checkboxes", required: true },
    textInputs: "missing.textInputs",
    formID: "feedback",
    buttons: [
      { type: "submit", text: "submitBtn", nextScreen: "feedback_results" },
    ],
  },
  broken: {
    title: "broken.title",
    checkboxes: { labels: "broken.checkboxes", required: true },
    textInputs: "broken.textInputs",
    formID: "feedback",
    buttons: [
      { type: "submit", text: "submitBtn", nextScreen: "feedback_results" },
    ],
  },
  other: {
    title: "other.title",
    textInputs: "other.textInputs",
    formID: "feedback",
    buttons: [
      { type: "submit", text: "submitBtn", nextScreen: "feedback_results" },
    ],
  },
  feedback_results: {
    titleInverse: "feedbackResults.title",
    plainText: "feedbackResults.plainText",
    buttons: [
      {
        type: "submit",
        text: "feedbackResults.button",
        nextScreen: "user_research",
      },
    ],
  },
  user_research: {
    title: "userResearch.title",
    plainText: "userResearch.plainText",
    textInputs: "userResearch.textInputs",
    formID: "userResearch",
    buttons: [
      { type: "submit", text: "submitBtn", nextScreen: "user_feedback_result" },
    ],
  },
  user_feedback_result: {
    titleInverse: "userFeedbackResults.title",
    plainText: "userFeedbackResults.plainText",
  },
};
export const INITIAL_SCREEN = SCREENS.feedback_type;

export const TEXTAREA_MAX_CHAR = 500;
export const OTHER_MAX_CHAR = 140;
