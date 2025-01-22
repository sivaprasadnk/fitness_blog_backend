const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const app = express();

const supabase = createClient({
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlaWRrdmZmeW9manlwZmVyeWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDI0OTYsImV4cCI6MjA1MzExODQ5Nn0.r8SL77s-B3dszADC2BsD2pjLXag-K9OTMC3CQUKiQiI',
    project: 'qeidkvffyofjypferygn'
});
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

app.get('/version', async (req, res) => {
    const { data, error } = await supabase
        .from('version')
        .select()
    res.send(data);
});


app.get('/posts', (req, res) => {
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
            "tags": [
                "Sleep",
            ],
            'imageAssetPath': 'assets/images/image1.jpg',
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image1.jpg?alt=media&token=f85eaabd-609e-41dc-8d74-b65aaac6100a",
            'isActive': "N",
            'isFeatured': "N",
        },
        {
            'id': 3,
            'dateString': "Jan 3, 2025",
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
            "tags": [
                "Sleep",
            ],
            'imageAssetPath': "assets/images/image3.jpg",
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image3.jpg?alt=media&token=a59cebae-d8ec-4f04-9475-f89383a7eeb8",
            'isActive': "Y",
            'isFeatured': "N",
        },
        {
            'id': 2,
            'dateString': "Jan 4, 2025",
            'title': "7 Secrets to Building a Sustainable Fitness Lifestyle",
            'subTitle': "Adopting a fitness lifestyle goes beyond crash diets or temporary workout routines. It's about building habits that stick and enhance your overall well-being. It requires patience, self-discipline, and a commitment to personal growth.",
            'content': `
Here are seven secrets to crafting a sustainable fitness lifestyle:
1. Set Realistic Goals

Start small and focus on attainable goals. Instead of aiming to lose 10 kg in a month, strive for steady progress like losing 1-2 kg per week. Setting realistic expectations prevents burnout and boosts long-term success.

2. Find Your Motivation

Identify your 'why.' Whether it's improving your health, boosting your energy, or feeling confident, knowing your reason keeps you driven. Write it down and revisit it during tough days.

3. Consistency is Key

Consistency beats intensity over time. Aim for regular workouts and balanced meals rather than sporadic bursts of extreme efforts. Find a schedule that fits your life and stick to it.

4. Make Fitness Enjoyable

Choose activities you love. Whether it's dancing, swimming, cycling, or lifting weights, enjoying the process makes it easier to stay committed. Experiment until you find what lights you up.

5. Fuel Your Body Right

Nutrition is as important as exercise. Focus on whole, nutrient-dense foods. Include lean proteins, healthy fats, and complex carbs in your meals. Stay hydrated and limit processed foods.

6. Prioritize Recovery

Rest days are vital for muscle repair and overall health. Incorporate stretching, foam rolling, and quality sleep into your routine. Listen to your body and avoid overtraining.

7. Track Your Progress

Keep track of your workouts, meals, and milestones. Use apps or journals to monitor your journey. Seeing progress—even small wins—can be incredibly motivating.            
            `,
            "tags": [
                "Lifestyle",
            ],
            'imageAssetPath': "assets/images/image2.jpg",
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image2.jpg?alt=media&token=2afd2adf-61ce-4410-b7c8-bb1abddcd7bd",
            'isActive': "Y",
            'isFeatured': "N",
        },
        {
            'id': 5,
            'dateString': "Jan 15, 2025",
            'title': "Unlocking Your Potential: The Ultimate Guide to Effective Workouts",
            'subTitle': "Workouts are more than just a means to stay fit; they are a gateway to improving your physical health, boosting mental clarity, and building a resilient mindset. Whether you're a beginner or a seasoned athlete, crafting an effective workout plan can help you reach your goals and maintain a sustainable fitness lifestyle.",
            'content': `
Why Workouts Matter

Regular exercise is essential for:

Physical Health: Enhancing cardiovascular health, building strength, and improving flexibility.

Mental Health: Reducing stress, boosting mood, and increasing focus.

Longevity: Supporting a healthier, longer life by preventing chronic illnesses.

Key Elements of an Effective Workout

1. Warm-Up

Never skip the warm-up! It prepares your body for exercise by increasing blood flow and reducing the risk of injury. Spend 5-10 minutes doing light cardio and dynamic stretches.

2. Strength Training

Building muscle is key to improving metabolism and overall strength. Focus on compound movements like squats, deadlifts, and push-ups that target multiple muscle groups.

3. Cardiovascular Exercise

Incorporate cardio to improve heart health and endurance. Activities like running, cycling, or swimming can elevate your heart rate and burn calories effectively.

4. Flexibility and Mobility

Stretching and mobility exercises improve range of motion and prevent stiffness. Dedicate 10-15 minutes to yoga, Pilates, or static stretching post-workout.

5. Cool-Down

End your workout with a cool-down to help your heart rate return to normal. This can include gentle stretching or low-intensity movements.

Tips for Success

Set Clear Goals: Define what you want to achieve—weight loss, muscle gain, or improved endurance.

Stay Consistent: Consistency trumps intensity. Aim for regular workouts rather than sporadic bursts of exercise.

Listen to Your Body: Avoid overtraining and rest when needed. Recovery is just as important as the workout itself.

Track Your Progress: Use fitness apps or journals to monitor your achievements and stay motivated.            
            `,
            "tags": [
                "Workout"
            ],
            'imageAssetPath': "assets/images/image5.jpg",
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image5.jpg?alt=media&token=ee03c01d-7504-4a21-909e-01d5e62a7750",
            'isActive': "Y",
            'isFeatured': "N",
        },
        {
            'id': 6,
            'dateString': "Jan 10, 2025",
            'title': "Nourish to Flourish: The Essential Guide to a Balanced Diet",
            'subTitle': "A balanced diet is the foundation of a healthy lifestyle. It not only fuels your workouts but also ensures your body gets the essential nutrients it needs to function optimally. Whether your goal is weight management, muscle gain, or simply staying healthy, a thoughtful approach to your diet can make all the difference.",
            'content': `
Why Diet Matters

Your diet plays a crucial role in:

Providing Energy: Supplying the fuel your body needs for daily activities and exercise.

Supporting Recovery: Helping repair muscles and tissues post-workout.

Boosting Immunity: Strengthening your body's defenses against illnesses.

Improving Mental Clarity: Enhancing focus, memory, and overall brain function.

Components of a Balanced Diet

1. Proteins

Proteins are the building blocks of the body. They help in muscle repair and growth. Include sources like:

Lean meats (chicken, turkey, fish)

Plant-based proteins (tofu, lentils, chickpeas)

Dairy products (yogurt, cheese, milk)

Eggs and nuts

2. Carbohydrates

Carbs are your body's primary energy source. Choose complex carbs like:

Whole grains (brown rice, quinoa, oats)

Vegetables (sweet potatoes, broccoli, carrots)

Legumes (beans, lentils)

3. Fats

Healthy fats are essential for hormone regulation and brain health. Opt for:

Avocados

Nuts and seeds

Olive oil

Fatty fish (salmon, mackerel)

4. Vitamins and Minerals

These micronutrients support various bodily functions. Include:

Fruits (berries, oranges, bananas)

Vegetables (spinach, kale, bell peppers)

Nuts and seeds for trace minerals

5. Hydration

Water is vital for every function in your body. Aim to drink at least 8 glasses a day and adjust based on activity levels.

Tips for Maintaining a Healthy Diet

Plan Your Meals: Prepare meals in advance to avoid unhealthy last-minute choices.

Practice Portion Control: Overeating even healthy foods can lead to weight gain.

Listen to Your Body: Eat when you're hungry and stop when you're full.

Limit Processed Foods: Avoid foods high in sugar, salt, and unhealthy fats.

Stay Consistent: A single cheat meal won't derail your progress, but consistency is key.            
            `,
            "tags": [
                "Diet",
            ],
            'imageAssetPath': "assets/images/image6.jpg",
            'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image6.jpg?alt=media&token=7c4c76cc-de12-446a-87a8-883c7b8085b7",
            'isActive': "Y",
            'isFeatured': "Y",
        },
        // // {
        //     'id': 2,
        //     'dateString': "Jan 3, 2025",
        //     'title': "",
        //     'subTitle': "",
        //     'content': "",
        //     "tags":[
        //           "Sleep",
        //      ],
        //     'imageAssetPath': "assets/images/image1.jpg",
        //     'imageNetworkPath': "",
        //     'isActive': "Y",
        //     'isFeatured': "N",
        // },
    ];
    var body = {
        'data': data,
    }
    res.send(body);
});

// app.get("/version", (req, resp) => {
//     resp.send({
//         "latest": 7,
//     });
// });

// app.get('/featured-post', (req, res) => {
//     var data =
//     {
//         'id': 1,
//         'dateString': 'Jan 1, 2025',
//         'title': "Sleep Smarter: Unlock Peak Health and Performance",
//         'subTitle': "Sleep is more than just rest; it's a vital component of your physical and mental well-being. Quality sleep improves recovery, sharpens focus, and balances your energy for the day ahead. Without it, even the best fitness routines can fall short.",
//         'content': `
//             Sleep is a cornerstone of a healthy lifestyle. Here's why it matters:

// 1. Supports Recovery: During sleep, your body repairs muscles and tissues, helping you recover from workouts and daily stress.

// 2. Boosts Mental Health: Adequate sleep improves mood, reduces stress, and enhances cognitive functions like focus and decision-making.

// 3. Regulates Appetite: Poor sleep can disrupt hunger hormones, leading to overeating and unhealthy food choices.

// 4. Enhances Performance: Quality sleep boosts energy, stamina, and overall performance in physical activities.

// Tips to Improve Sleep Quality

// 1. Stick to a Consistent Schedule: Going to bed and waking up at the same time every day helps regulate your body's internal clock.

// 2. Create a Relaxing Bedtime Routine: Engage in calming activities such as reading, meditating, or taking a warm bath before bed.

// 3. Limit Screen Time: Avoid screens at least an hour before bedtime, as blue light can interfere with your sleep cycle.

// 4. Optimize Your Sleep Environment: Ensure your bedroom is cool, dark, and quiet for a better sleep experience.

// 5. Watch Your Diet: Avoid heavy meals, caffeine, and alcohol close to bedtime.
//             `,
//         'imageAssetPath': 'assets/images/image1.jpg',
//         'imageNetworkPath': "https://firebasestorage.googleapis.com/v0/b/fitness-thoughts-bac27.firebasestorage.app/o/image1.jpg?alt=media&token=f85eaabd-609e-41dc-8d74-b65aaac6100a",
//         'isActive': "Y",
//     }
//         // {
//         //     'id': '3',
//         //     'date': "",
//         //     'title': "",
//         //     'subTitle': "",
//         //     'content': "",
//         //     'imagePath': "",
//         //     'isActive': "Y",
//         // },
//         ;
//     var body = {
//         'data': data
//     }
//     res.send(body);
// });



app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});
