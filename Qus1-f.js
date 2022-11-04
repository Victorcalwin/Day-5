//Question f:
var ar1 = [1, 15, 15, 6, 8];
var ar2 = [2, 15, 17, 55, 36];
var n1 = ar1.length;
var n2 = ar2.length;
var n=n1;

let median = function(){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
   
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2)/2)
}

median();


//IIFE

// (function(){
//     var i = 0; 
//     var j = 0; 
//     var count;
//     var m1 = -1, m2 = -1;
//     for (count = 0; count <= n; count++)
//     {       
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
   
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; 
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; 
//             m2 = ar2[j];
//             j++;
//         }
//     }


//     console.log((m1 + m2)/2)
// })(ar1,ar2,n1)
