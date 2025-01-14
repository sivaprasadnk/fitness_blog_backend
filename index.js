const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable if it exists, otherwise use 3000
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {

    var body = {
        'data': 'Hi helo',
    }
    res.send(body);
});


app.get('/recent-posts', (req, res) => {
    var data = [
        {
            'id': 1,
            'dateString': 'Jan 2, 2025',
            'title': "Sleep Smarter: Unlock Peak Health and Performance",
            'subTitle': "Sleep is more than just rest; it's a vital component of your physical and mental well-being. Quality sleep improves recovery, sharpens focus, and balances your energy for the day ahead. Without it, even the best fitness routines can fall short.",
            'content': `
            Sleep is a cornerstone of a healthy lifestyle. Here's why it matters:

1. Supports Recovery: During sleep, your body repairs muscles and tissues, helping you recover from workouts and daily stress.

2. Boosts Mental Health: Adequate sleep improves mood, reduces stress, and enhances cognitive functions like focus and decision-making.

3. Regulates Appetite: Poor sleep can disrupt hunger hormones, leading to overeating and unhealthy food choices.

4. Enhances Performance: Quality sleep boosts energy, stamina, and overall performance in physical activities.

Tips to Improve Sleep Quality

1. Stick to a Consistent Schedule: Going to bed and waking up at the same time every day helps regulate your body's internal clock.

2. Create a Relaxing Bedtime Routine: Engage in calming activities such as reading, meditating, or taking a warm bath before bed.

3. Limit Screen Time: Avoid screens at least an hour before bedtime, as blue light can interfere with your sleep cycle.

4. Optimize Your Sleep Environment: Ensure your bedroom is cool, dark, and quiet for a better sleep experience.

5. Watch Your Diet: Avoid heavy meals, caffeine, and alcohol close to bedtime.
            `,
            'imageAssetPath': 'assets/images/image1.jpg',
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image1.jpg?alt=media&token=f85eaabd-609e-41dc-8d74-b65aaac6100a",
            'isActive': "Y",
        },
        {
            'id': 3,
            'date': "Jan 3, 2025",
            'title': "Sleep and Obesity: The Hidden Link You Must Know",
            'subTitle': "Sleep is often overlooked in the journey to maintaining a healthy weight. However, research consistently shows a strong connection between sleep and obesity. Lack of adequate sleep disrupts hormones that regulate hunger and metabolism, making it harder to maintain a healthy weight. Additionally, poor sleep can lead to increased cravings for high-calorie, unhealthy foods, further complicating weight management efforts.",
            'content': `
Here's how insufficient or poor-quality sleep can impact your weight:

#### 1. **Hormonal Imbalances**

Lack of sleep disrupts the balance of hunger hormones:

- **Leptin**: This hormone signals fullness to your brain. Sleep deprivation lowers leptin levels, making you feel less satisfied after eating.
- **Ghrelin**: Known as the "hunger hormone," ghrelin levels increase with poor sleep, leading to increased appetite and cravings.

#### 2. **Increased Cravings for Unhealthy Foods**

Sleep-deprived individuals often crave high-calorie, sugary, and fatty foods. This is because sleep loss affects the brain's reward system, making unhealthy foods more appealing.

#### 3. **Reduced Energy and Activity Levels**

Poor sleep leads to fatigue, reducing your motivation to exercise or stay active. Lower physical activity means fewer calories burned, contributing to weight gain.

#### 4. **Disrupted Metabolism**

Insufficient sleep affects how your body processes glucose, increasing the risk of insulin resistance and weight gain. Over time, this can contribute to conditions like diabetes and obesity.

#### 5. **Supports Physical Recovery**

Sleep plays a crucial role in repairing and recovering the body. During deep sleep stages, your body works to repair muscles, tissues, and cells damaged during daily activities or workouts. This recovery process helps maintain physical health and improves overall energy levels.

Insufficient sleep affects how your body processes glucose, increasing the risk of insulin resistance and weight gain. Over time, this can contribute to conditions like diabetes and obesity.

### Tips to Break the Cycle

If you're struggling with weight and suspect poor sleep is a factor, consider these tips:

1. **Prioritize Sleep Hygiene**: Maintain a consistent sleep schedule, and create a relaxing bedtime routine.
2. **Manage Stress**: Practice relaxation techniques such as meditation or deep breathing to improve sleep quality.
3. **Limit Late-Night Snacking**: Avoid eating heavy meals or sugary snacks close to bedtime.
4. **Be Physically Active**: Regular exercise promotes better sleep and helps manage weight.
5. **Seek Professional Help**: If sleep issues persist, consult a healthcare provider to address underlying problems like sleep apnea.            
            `,
            'imageAssetPath': "assets/images/image3.jpg",
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image3.jpg?alt=media&token=a59cebae-d8ec-4f04-9475-f89383a7eeb8",
            'isActive': "Y",
        },
        // // {
        //     'id': '3',
        //     'date': "",
        //     'title': "",
        //     'subTitle': "",
        //     'content': "",
        //     'imagePath': "",
        //     'isActive': "Y",
        // },
    ];
    var body = {
        'data': data
    }
    res.send(body);
});

app.get('/featured-post', (req, res) => {
    var data =
    {
        'id': 1,
        'dateString': 'Jan 1, 2025',
        'title': "Sleep Smarter: Unlock Peak Health and Performance",
        'subTitle': "Sleep is more than just rest; it's a vital component of your physical and mental well-being. Quality sleep improves recovery, sharpens focus, and balances your energy for the day ahead. Without it, even the best fitness routines can fall short.",
        'content': `
            Sleep is a cornerstone of a healthy lifestyle. Here's why it matters:

1. Supports Recovery: During sleep, your body repairs muscles and tissues, helping you recover from workouts and daily stress.

2. Boosts Mental Health: Adequate sleep improves mood, reduces stress, and enhances cognitive functions like focus and decision-making.

3. Regulates Appetite: Poor sleep can disrupt hunger hormones, leading to overeating and unhealthy food choices.

4. Enhances Performance: Quality sleep boosts energy, stamina, and overall performance in physical activities.

Tips to Improve Sleep Quality

1. Stick to a Consistent Schedule: Going to bed and waking up at the same time every day helps regulate your body's internal clock.

2. Create a Relaxing Bedtime Routine: Engage in calming activities such as reading, meditating, or taking a warm bath before bed.

3. Limit Screen Time: Avoid screens at least an hour before bedtime, as blue light can interfere with your sleep cycle.

4. Optimize Your Sleep Environment: Ensure your bedroom is cool, dark, and quiet for a better sleep experience.

5. Watch Your Diet: Avoid heavy meals, caffeine, and alcohol close to bedtime.
            `,
        'imageAssetPath': 'assets/images/image1.jpg',
        'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image1.jpg?alt=media&token=f85eaabd-609e-41dc-8d74-b65aaac6100a",
        'isActive': "Y",
    }
        // {
        //     'id': '3',
        //     'date': "",
        //     'title': "",
        //     'subTitle': "",
        //     'content': "",
        //     'imagePath': "",
        //     'isActive': "Y",
        // },
        ;
    var body = {
        'data': data
    }
    res.send(body);
});



app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});
