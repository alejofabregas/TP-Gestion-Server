import { GroupMember } from "./GroupMember.js";
import { User } from "./User.js";
import { Group } from "./Group.js";
import { Expense } from "./Expense.js";
import { IndividualExpense } from "./IndividualExpense.js";
import { Debts } from "./Debts.js";


User.hasMany(GroupMember, { foreignKey: 'user_id' });
User.hasMany(Group, {foreignKey:'admin_id'});
User.hasMany(IndividualExpense, { foreignKey: 'user_id' });
User.hasMany(Debts, { foreignKey: 'debtor_id' });
User.hasMany(Debts, { foreignKey: 'creditor_id' });

Group.hasMany(GroupMember, { foreignKey: 'group_id' });
Group.hasMany(Expense, { foreignKey: 'group_id' });
Group.hasMany(IndividualExpense, { foreignKey: 'group_id' });
Group.hasMany(Debts, { foreignKey: 'group_id' });

GroupMember.belongsTo(User, { foreignKey: 'user_id' });
GroupMember.belongsTo(Group, { foreignKey: 'group_id' });

Expense.belongsTo(Group, { foreignKey: 'group_id' });
Expense.hasMany(IndividualExpense, { foreignKey: 'expense_id' });

IndividualExpense.belongsTo(User, { foreignKey: 'user_id' });
IndividualExpense.belongsTo(Expense, { foreignKey: 'expense_id' });
IndividualExpense.belongsTo(Group, { foreignKey: 'group_id' });

Debts.belongsTo(User, { foreignKey: 'debtor_id' });
Debts.belongsTo(User, { foreignKey: 'creditor_id' });
Debts.belongsTo(Group, { foreignKey: 'group_id' });