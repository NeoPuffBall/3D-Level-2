// FRAGMENT SHADER

#version 330

in float age;
uniform sampler2D texture0;
out vec4 outColor;

void main()
{
outColor = texture(texture0, gl_PointCoord);
outColor = vec4(0, 0.5, 1.0, 1 - age);
}
