const nodemailer = require('nodemailer');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Send task assignment email
exports.sendTaskAssignmentEmail = async (assignee, task, assignedBy) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: assignee.email,
      subject: `New Task Assigned: ${task.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Task Assigned</h2>
          <p>Hi ${assignee.name},</p>
          <p>You have been assigned a new task by <strong>${assignedBy.name}</strong>:</p>
          
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1F2937;">${task.title}</h3>
            ${task.description ? `<p style="color: #6B7280;">${task.description}</p>` : ''}
            <p style="margin: 10px 0;">
              <strong>Priority:</strong> 
              <span style="
                padding: 4px 12px; 
                border-radius: 4px; 
                background-color: ${task.priority === 'high' ? '#FEE2E2' : task.priority === 'medium' ? '#FEF3C7' : '#DBEAFE'};
                color: ${task.priority === 'high' ? '#991B1B' : task.priority === 'medium' ? '#92400E' : '#1E40AF'};
              ">
                ${task.priority.toUpperCase()}
              </span>
            </p>
            ${task.dueDate ? `<p><strong>Due Date:</strong> ${new Date(task.dueDate).toLocaleDateString()}</p>` : ''}
          </div>
          
          <p>
            <a href="${process.env.FRONTEND_URL}/tasks/${task._id}" 
               style="
                 display: inline-block;
                 padding: 12px 24px;
                 background-color: #4F46E5;
                 color: white;
                 text-decoration: none;
                 border-radius: 6px;
                 font-weight: bold;
               ">
              View Task
            </a>
          </p>
          
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;" />
          <p style="color: #6B7280; font-size: 14px;">
            This is an automated message from TaskFlow. Please do not reply to this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Task assignment email sent to ${assignee.email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - email failure shouldn't break task creation
  }
};

// Send due date reminder email
exports.sendDueDateReminderEmail = async (user, task) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: `Reminder: Task Due Soon - ${task.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DC2626;">⏰ Task Due Date Reminder</h2>
          <p>Hi ${user.name},</p>
          <p>This is a reminder that the following task is due soon:</p>
          
          <div style="background-color: #FEF2F2; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1F2937;">${task.title}</h3>
            <p><strong>Due Date:</strong> ${new Date(task.dueDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> ${task.status}</p>
          </div>
          
          <p>
            <a href="${process.env.FRONTEND_URL}/tasks/${task._id}" 
               style="
                 display: inline-block;
                 padding: 12px 24px;
                 background-color: #DC2626;
                 color: white;
                 text-decoration: none;
                 border-radius: 6px;
                 font-weight: bold;
               ">
              View Task
            </a>
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Due date reminder sent to ${user.email}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};