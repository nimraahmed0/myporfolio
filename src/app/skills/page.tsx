

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Tailwind CSS', level: 95 },
  ];
  
  const Skills = () => {
    return (
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 font-serif">My Skills</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-900 text-teal-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <div
                      className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}
                      style={{ height: '8px' }}
                    >
                      <div
                        className={`bg-teal-500 text-center text-xs font-medium text-white p-0.5 leading-none rounded-full`}
                        style={{ width: `${skill.level}%`, height: '8px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  