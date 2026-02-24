#version 330


// Input Variables (received from Vertex Shader)
in vec2 texCoord0;
//in vec4 negate0;


// Uniform: The Texture
uniform sampler2D texture0;
uniform vec2 resolution = vec2(800, 600);
uniform bool negative = false;



// Output Variable (sent down through the Pipeline)
out vec4 outColor;


void main(void)

{
vec4 negate = vec4(1,1,1,1);
if (negative) outColor = negate - texture(texture0, texCoord0);
else outColor = texture(texture0, texCoord0);

}