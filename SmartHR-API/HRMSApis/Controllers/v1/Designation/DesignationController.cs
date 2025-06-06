using DataModels.Designations;
using DataServices.IService;  // Assuming your interface is here
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DataController
{
    [ApiController]
    [Route("api/[controller]")]
    public class DesignationController : ControllerBase
    {
        private readonly IDesignationService _designationService;

        public DesignationController(IDesignationService designationService)
        {
            _designationService = designationService;
        }

        // GET: api/designation/all
        [HttpGet("all")]
        public async Task<IActionResult> GetAllDesignations()
        {
            var designations = await _designationService.GetAllDesignationsAsync();
            return Ok(designations);
        }

        // GET: api/designation/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDesignation(int id)
        {
            var designation = await _designationService.GetDesignationByIdAsync(id);
            if (designation == null)
                return NotFound(new { Message = $"Designation with ID {id} not found." });

            return Ok(designation);
        }

        // POST: api/designation
        [HttpPost]
        public async Task<IActionResult> CreateDesignation([FromBody] DesignationModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _designationService.CreateDesignationAsync(model);
            return CreatedAtAction(nameof(GetDesignation), new { id = created.DesignationId }, model);
        }
    }
}
