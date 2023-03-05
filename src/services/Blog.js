export const LoadAllBlogPosts = () => {
  return {
    0: {
      id: "f0e16c3a-adae-4881-9920-93b5a591e3d2",
      title: "The Benefits of Mindfulness Meditation",
      body: "Mindfulness meditation is a practice that has gained popularity in recent years, and for good reason. This type of meditation involves focusing your attention on the present moment, without judgment. It can be practiced in a variety of ways, such as sitting meditation, walking meditation, or even while doing daily activities like washing dishes or taking a shower. Research has shown that mindfulness meditation can have numerous benefits for both physical and mental health. Here are just a few: Reduces stress and anxiety: Mindfulness meditation has been found to reduce levels of the stress hormone cortisol, as well as symptoms of anxiety. Improves focus and attention: Practicing mindfulness can improve cognitive function and increase focus and attention. Enhances emotional regulation: Mindfulness can help individuals regulate their emotions and increase their overall emotional well-being. Boosts immune function: Research has found that mindfulness meditation can boost immune function and increase the body’s ability to fight off illness. Promotes better sleep: Practicing mindfulness before bed can improve sleep quality and help individuals fall asleep more easily. In addition to these benefits, mindfulness meditation can also help individuals cultivate a greater sense of compassion, empathy, and connectedness with others. By practicing mindfulness, individuals can become more present and attentive in their relationships, which can lead to greater intimacy and fulfillment. If you’re interested in giving mindfulness meditation a try, there are a variety of resources available, including apps, guided meditations, and online courses. With regular practice, you may start to notice some of the many benefits that mindfulness meditation can offer.",
      created_at: "2023-03-04",
      metadata: {
        author: "ChatGPT",
        category: "Meditation",
        tags: ["mindfulness", "meditation", "health", "well-being"],
      },
    },
    1: {
      id: "a51bd8c7-3951-4dde-881f-221aba5a2abe",
      title: "The Importance of Regular Exercise for Mental Health",
      body: "We all know that exercise is good for our physical health, but did you know that it's also important for our mental health? Research has shown that regular exercise can have a significant positive impact on mental well-being. Exercise has been found to: Reduce symptoms of depression and anxiety: Regular exercise has been shown to reduce symptoms of depression and anxiety, often as effectively as medication or therapy. Increase self-esteem and confidence: Regular exercise can help individuals feel more confident in their abilities and improve their self-esteem. Improve cognitive function: Exercise can improve cognitive function, including memory, attention, and learning. Enhance overall mood: Exercise has been found to enhance overall mood and increase feelings of happiness and well-being. Provide a sense of control and accomplishment: Regular exercise can provide individuals with a sense of control over their physical and mental health, as well as a sense of accomplishment as they achieve their fitness goals. In addition to these benefits, exercise can also help individuals cope with stress, improve sleep quality, and reduce the risk of developing chronic diseases such as obesity, type 2 diabetes, and heart disease. It's important to note that the type and intensity of exercise can vary based on individual needs and preferences. Some people may prefer high-intensity workouts, while others may find more gentle forms of exercise, such as yoga or walking, to be more beneficial for their mental health. If you're interested in incorporating exercise into your routine to improve your mental health, it's important to start slowly and gradually increase the intensity and duration of your workouts. You can also seek the guidance of a qualified fitness professional to help you create an exercise plan that works for you. By prioritizing regular exercise, you can improve both your physical and mental health, leading to a happier, healthier life.",
      created_at: "2023-03-04",
      image: "https://picsum.photos/722/590",
      metadata: {
        author: "ChatGPT",
        category: "Exercise",
        tags: ["mental health", "exercise", "well-being", "self-esteem"],
      },
    },
  };
};

export const LoadBlogPost = (id) => {
  const posts = LoadAllBlogPosts();

  for (const key in posts) {
    if (id.id === posts[key].id) {
      return posts[key];
    }
  }

  return null;
};
