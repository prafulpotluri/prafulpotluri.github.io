import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Information Associate",
      company: "Western Michigan University",
      location: "Kalamazoo, MI",
      period: "August 2023 – April 2025",
      responsibilities: [
        "Monitored and analyzed facility usage data (room reservations, foot traffic, resource allocation) resulting in accurate scheduling and more efficient daily operations using Mazevo, SenSource, and SubItUp",
        "Processed and validated 50+ daily data entries in Excel, maintaining 99% accuracy in event documentation and resource tracking",
        "Compiled utilization and scheduling reports, which supported data-driven decision-making for space usage and staffing",
        "Assisted in optimizing allocation of resources based on real-time event needs, ensuring optimal resource deployment and client satisfaction",
      ],
    },
    {
      title: "Systems Engineer",
      company: "Infosys Limited",
      location: "India",
      period: "January 2021 – May 2023",
      responsibilities: [
        "Customized and optimized the IFS FSM tool to meet specific business requirements, resulting in enhanced system functionality and improved operational efficiency",
        "Integrated FSM with other enterprise systems to enable seamless data flow and communication across departments",
        "Managed and validated multiple FSM and enterprise system environments, maintaining system stability, reliability, and optimal performance",
        "Led data migration efforts between environments, ensuring data integrity and facilitating smooth system transitions",
        "Developed and maintained detailed system documentation for configurations, processes, and troubleshooting",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <div className="h-1 w-20 bg-primary rounded-sm"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block -translate-x-1.5"></div>

                <div className="bg-card p-8 rounded-xl shadow-lg border border-border/50 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{resp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
