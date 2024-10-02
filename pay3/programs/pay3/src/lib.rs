use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_instruction;

declare_id!("8ayhvQzwDnwX57Zxy7kjbUuY7z2NnxTbULd844XhZ4Fj");

#[program]
pub mod sol_transfer_system {
    use super::*;

    pub fn pay_user(ctx: Context<PayUser>, amount: u64) -> Result<()> {
        let ix = system_instruction::transfer(
            &ctx.accounts.user_from.key(), 
            &ctx.accounts.user_to.key(),  
            amount,
        );
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.user_from.to_account_info(),
                ctx.accounts.user_to.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
        )?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct PayUser<'info> {
    #[account(mut)]
    pub user_from: Signer<'info>,
    #[account(mut)]
    /// CHECK: We are transferring funds to this account, no validation is required
    pub user_to: AccountInfo<'info>, 
    pub system_program: Program<'info, System>,
}
