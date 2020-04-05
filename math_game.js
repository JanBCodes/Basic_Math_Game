
//Math Game

alert(`Welcome to the Math Game\nTo play you must be aged between 8 to 11!\nHere's how to win:\nYou have 4 chances to make it to Level 10!\nThere are 3 rounds:\n      Round 1:  Addition (4 Levels) \n      Round 2:  Subtraction (4 Levels) \n  & Round 3:  Division (2 Levels) \n Let's Start!!!!!!!`);
user_name=prompt(`Enter your name?`);
age=prompt(`And how old are you ${user_name}?`);  

if(age < 8 || age > 11)
{
    alert(`Ooops! Sorry ${user_name}, this game is for kids aged 8 to 11!`);
}

else //------- might have to change to a while or do loop later
{
    // Block - Else Scope (Accessible to all in else)
    const point_right=10, point_wrong=5; 
    let level_counter=1, chances=0, correct=0, round_one_correct=0, round_two_correct=0, round_three_correct=0, points=0, wrong=0;

    // Round One - 4 Levels of Addition
    // Level 1 - 4

    while(true) 	
    {
        const random_first_num=Math.floor(Math.random() * 25) + 1;          // returns a random integer from 1 to 25
        const random_second_num=Math.floor(Math.random() * 9) + 1;          // returns a random integer from 1 to 9
        const random_num=Math.floor(Math.random() * 5) + 1;                 // returns a random integer from 1 to 5
        const corr_ans=(random_first_num+random_second_num);                
        const wrg_ans=(random_first_num+random_second_num+random_num);      // making wrong answer also random 

        let random_option=Math.floor(Math.random() * 2) + 1

        if (random_option == 1)
        {
            round_one_answer=prompt(`${user_name} , This is Round 1, Level ${level_counter}.\n
            Can you please enter the letter which represents the correct answer for ${random_first_num} + ${random_second_num}:\nA: ${corr_ans}\nB: ${wrg_ans} `)
            
            if(round_one_answer==`A` || round_one_answer==`a`) // Correct Answer
            {
                level_counter++; //MAX==4
                points+=point_right; // Counting up I hope (MthGame review 1.10)
                round_one_correct++; //Tracking for number of round_one correct answers
                correct++; //Tracking for number of correct answers through out the game 
                if(round_one_correct==4) // Next Level - Round 2
                {
                    alert(`Congrats - Move on to Round Two - Subtraction`); // Next Level - Round 2 !!!!------TESTING FEATURE
                    break;
                }
            }
            else // Wrong Answer
            {      	
                points-=point_wrong;  // Counting down 
                
                if(points < 0)
                {
                    points=0;
                }
                wrong++;
                chances++;
                    // Win /Lose or Code More
                if(chances == 4)// Lost Game
                {
                    alert(`You have used all 4 of your chances -GAME OVER!`)
                    break;
                }
            }
        }
        else if (random_option == 2)
        {
            round_one_answer=prompt(`${user_name} , This is Round 1, Level ${level_counter}.\n
            Can you please enter the letter which represents the correct answer for ${random_first_num} + ${random_second_num}:\nA: ${wrg_ans} \nB: ${corr_ans} `)
            
            if(round_one_answer==`B` || round_one_answer==`b`) // Correct Answer
            {
                level_counter++; //MAX==4
                points=points+point_right; // Counting up I hope (MthGame review 1.10)
                round_one_correct++; //Tracking for number of round_one correct answers
                correct++; //Tracking for number of correct answers through out the game
                if(round_one_correct==4) // Next Level - Round 2
                {
                    alert(`Congrats - Move on to Round Two - Subtraction`); // Next Level - Round 2
                    break;
                }
            }
            else // Wrong Answer
            {      	
                points-=point_wrong;  // Counting down I hope
                if(points < 0)
                {
                    points=0;
                }
                wrong++;
                chances++;
                    // Win /Lose or Code More
                if(chances == 4)// Lost Game
                {
                    alert(`You have used all 4 of your chances -GAME OVER!`)
                    break;
                }
            }
        }     
    } //END OF ROUND ONE - WHILE END
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
   
        // Round Two - 4 Levels of Subtraction
    // Level 5-8

    while(chances<4)
    {
    const random_first_num=Math.floor(Math.random() * 25) + 1;          // returns a random integer from 1 to 25
	const random_second_num=Math.floor(Math.random() * 9) + 1;          // returns a random integer from 1 to 9
    const random_num=Math.floor(Math.random() * 3) + 1;                 // returns a random integer from 1 to 3
    const corr_ans=(random_first_num-random_second_num);                
    const wrg_ans=(random_first_num-random_second_num+random_num);      // making wrong answer also random
      
// !!!!!!!!!!!!!!! ----- NEED TO MAKE 2nd INTEGER < 1ST INTEGER
        let random_option=Math.floor(Math.random() * 2) + 1

        if (random_option == 1)
        {
            round_two_answer=prompt(`${user_name} , This is Round 2, Level ${level_counter}.\n
            Can you please enter the letter which represents the correct answer for ${random_first_num} - ${random_second_num}:\nA: ${corr_ans}\nB: ${wrg_ans} `)
            
            if(round_two_answer==`A` || round_two_answer==`a`) // Correct Answer
            {
                level_counter++; //MAX==4
                points=points+point_right; // Counting up I hope (MthGame review 1.10)
                round_two_correct++; //Tracking for number of round_two correct answers
                correct++; //Tracking for number of correct answers through out the game 
                if(round_two_correct==4) // Next Level - Round 3
                {
                    alert(`Congrats - Move on to Round Three - Division`); // Next Level - Round 3 !!!!------TESTING FEATURE
                    break;
                }
            }
            else // Wrong Answer
            {      	
                points=points-point_wrong;  // Counting down I hope
                if(points < 0)
                {
                    points=0;
                }
                wrong++;
                chances++;
                if(chances == 4)// Lost Game
                {
                    alert(`You have used all 4 of your chances -GAME OVER!`)
                    break;
                }
            }
        }
        else if (random_option == 2)
        {
            round_two_answer=prompt(`${user_name} , This is Round 2,, Level ${level_counter}.\n
            Can you please enter the letter which represents the correct answer for ${random_first_num} - ${random_second_num}:\nA: ${wrg_ans} \nB: ${corr_ans} `)
            
            if( round_two_answer==`B` ||  round_two_answer==`b`) // Correct Answer
            {
                level_counter++; //MAX==4
                points=points+point_right; // Counting up I hope (MthGame review 1.10)
                round_two_correct++; //Tracking for number of round_one correct answers
                correct++; //Tracking for number of correct answers through out the game (or atleast I hope)
                
                if( round_two_answer==4) // Next Level - Round 2
                {
                    alert(`Congrats - Move on to Round Two - Subtraction`); // Next Level - Round 2
                    break;
                }
            }
            else // Wrong Answer
            {      	
                points=points-point_wrong;  // Counting down I hope
                
                if(points < 0)
                {
                    points=0;
                }
                
                wrong++;
                chances++;
                    // Win /Lose or Code More
                if(chances == 4)// Lost Game
                {
                    alert(`You have used all 4 of your chances -GAME OVER!`)
                    break;
                }
            }
        }     
    } //END OF ROUND TWO 
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------ 
    // Round Three - 2 Levels of Division
    // Level 9 -10   
    while(chances<4)
    {
		const random_first_num=Math.floor(Math.random() * 25) + 1;          // returns a random integer from 1 to 25
        const random_sec_num=Math.floor(Math.random() * 8) + 2;          // returns a random integer from 2* to 9
        const random_num=Math.floor(Math.random() * 3) + 1;                 // returns a random integer from 1 to 3
        const corr_ans=(random_first_num/random_sec_num);                
        const wrg_ans=(random_num+random_first_num/random_sec_num);      // making wrong answer also random
        
        round_three_answer=prompt(`${user_name} , This is Round 3, Level ${level_counter}.\n 
        Can you please enter the letter which represents the correct answer for ${random_first_num} / ${random_sec_num}:\nA: ${corr_ans} \nB: ${wrg_ans} `)
    
            // !!!!!!!!!!!!!!! ----- NEED TO MAKE 2nd Interger divisable by 1st interger

        if(round_three_answer==`A` || round_three_answer==`a`) // Correct Answer
        {
            level_counter++; //MAX==4
            points+=point_right; // Counting up I hope
            round_three_correct++; //Tracking for number of round_two_correct answers
            correct++; //Tracking for number of correct answers through out the game (or atleast I hope)
            
            if(round_three_correct==4)// Next Level - Round 2
                {   
                    break;
                }
        }
        else // Wrong Answer
        {
          		points-=point_wrong;  // Counting down I hope
                if(points < 0)
                {
                    points=0;
                }
                wrong++;
                chances++;
                    // Win /Lose or Code More
                if(chances == 4)// Lost Game
                {
                    alert(`You have used all 4 of your chances -GAME OVER!`)
                    break;
                }
		}

    if(correct==10) // 10 Levels Completed
    {
        alert( //Player Status
        `10LEVELS Completed - Yuh Win`);
        break;
    }
    
};//END OF ROUND THREE

//------------------------------------------------------------------------------------------------------------

alert(`Player: ${user_name} - \n
        Points: ${points}\n
		No of chances: ${chances}\n
		No of questions answered wrong: ${wrong}\n
		No. of correct answers: ${correct}  `);
//------------------------------------------------------------------------------------------------------------    

}; //END OF ELSE
