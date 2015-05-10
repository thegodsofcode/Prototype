#pragma strict

var leftKey : KeyCode;
var rightKey : KeyCode;

var rb : Rigidbody2D;

var speedx : float = 3;
var speedy : float = 3;


function Start () {
	
	rb = GetComponent.<Rigidbody2D>();	
}	

function Update () {

	if(Input.GetKey(rightKey)) //Move Right
	{		
		rb.velocity.x = speedx;
	}
	
	else if(Input.GetKey(leftKey)) //Move Left
	{
		rb.velocity.x = speedx * -1;	
	}
		
	else  //Idle
	{		
		rb.velocity.x = 0;
	}
	
}